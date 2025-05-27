import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
import 'package:provider/provider.dart';
import 'dart:convert';
import 'dart:io';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    // Change this up so we can have global state
    return ChangeNotifierProvider(
      create: (context) => MyAppState(),
      child: MaterialApp(
        title: 'SD Flutter Client',
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(
            seedColor: const Color.fromARGB(255, 64, 83, 146),
          ),
        ),
        home: const SDMain(title: 'SD Flutter test'),
      ),
    );
  }
}

//In a "real" app request/response objects should be generated from an api spec, not lovingly handcoded.
class ProxyRequest {
  ProxyRequest({
    required this.method,
    required this.pathQuery,
    required this.stream,
    required this.body,
    this.headers,
  });

  final String method;
  final String pathQuery;
  final bool stream;
  final String body;
  final Map<String, dynamic>? headers;

  Map<String, dynamic> toJson() => {
    'method': method,
    'path_query': pathQuery,
    'stream': stream,
    'body': body,
    'headers': headers,
  };
}

class MyAppState extends ChangeNotifier {
  // global application state lives here - we'd likely use something like Bloc for state management in a "real" app
  String authToken = '';
  // gonna ignore token expiry for now but we'd need to keep an eye on it otherwise
  // authExpiry = DateTime.now()
  final sourceList = <String>[];

  final jsonEncoder = JsonEncoder();

  // we don't need async network calls but we do need async proxy calls, truly there is no escape
  Future<String> _proxyCall({
    required String callMethod,
    required String pathQuery,
    required stream,
    required String body,
    required Map<String, dynamic> headers,
  }) async {
    final proxyRequest = ProxyRequest(
      method: callMethod,
      pathQuery: pathQuery,
      stream: stream,
      body: body,
      headers: headers,
    );

    final String payload = jsonEncoder.convert(
      proxyRequest,
    ); //this could probably be a proxyRequest class method

    if (proxyRequest.stream) {
      print("Streaming mode not implemented yet");
      return "";
    } else {
      print("Calling the proxy...");
      final proxyExec =
          "/home/user/projects/securedrop-client/target/release/securedrop-proxy";
      final Map<String, String> originEnv = {
        "SD_PROXY_ORIGIN": "https://demo-journalist.securedrop.org",
      };
      final Process proc = await Process.start(
        proxyExec,
        [],
        environment: originEnv,
      );

      proc.stdin.writeln(payload);
      final List<String> _lOut = [];
      final List<String> _lErr =
          []; // not actually using stderr for anything but let's grab it anyway

      await proc.stdout.transform(utf8.decoder).forEach(_lOut.add);
      await proc.stderr.transform(utf8.decoder).forEach(_lErr.add);

      final _sOut = _lOut.join('\n');
      final _sErr = _lErr.join('\n');

      var theCode = await proc.exitCode;
      print("Exit Code is $theCode");
      return _sOut;
    }
    return ""; // lame, should throw an exception or something if we get this far
  }

  void syncSources() {
    // real sync goes here - this just adds 10 new random source names
    final newSources = generateWordPairs().take(10);
    for (final s in newSources) {
      sourceList.add(s.asCamelCase);
      notifyListeners();
    }
  }

  void tryLogin(String username, String passphrase, String oneTimeCode) {
    _proxyCall(
      callMethod: "POST",
      pathQuery: "/api/v1/token",
      stream: false,
      body:
          '{"username":"$username","passphrase":"$passphrase", "one_time_code":"$oneTimeCode"}',
      headers: {},
    ).then((String result) {
      print("Result: $result");
      final fullJson = jsonDecode(result);
      final bodyJson = jsonDecode(fullJson['body']);

      if (fullJson['status'] == 200) {
        print("Token is ${bodyJson['token']}");
        authToken = bodyJson['token'];
        notifyListeners();
      } else {
        print("Error is ${bodyJson["message"]}");
      }
    });
  }

  void logout() {
    authToken = '';
    notifyListeners();
  }
}

class SDMain extends StatefulWidget {
  const SDMain({super.key, required this.title});

  final String title;

  @override
  State<SDMain> createState() => _SDMainState();
}

class _SDMainState extends State<SDMain> {
  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called

    // To keep track of login status we'll need to peek at MyAppState
    var appState = context.watch<MyAppState>();

    // If we're not logged in (no auth token set), show the login page.
    // If we are logged in, show the source list page
    Widget page;

    if (appState.authToken.isEmpty) {
      // page = Placeholder(color: Color.fromARGB(255, 54, 133, 2));
      page = LoginForm();
    } else {
      page = SourceListPage();
    }

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Container(
        color: Theme.of(context).colorScheme.primaryContainer,
        child: page,
      ),
    );
  }
}

// Let's add the login form page
class LoginForm extends StatefulWidget {
  const LoginForm({super.key});

  @override
  LoginFormState createState() {
    return LoginFormState();
  }
}

class LoginFormState extends State<LoginForm> {
  final _formKey = GlobalKey<FormState>();

  final usernameController = TextEditingController();
  final passphraseController = TextEditingController();
  final oneTimeCodeController = TextEditingController();

  // I find this to be lame
  @override
  void dispose() {
    usernameController.dispose();
    passphraseController.dispose();
    oneTimeCodeController.dispose();
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    usernameController.text = "journalist";
    passphraseController.text =
        "correct horse battery staple profanity oil chewy";
  }

  @override
  Widget build(BuildContext context) {
    var appState = context.watch<MyAppState>();

    return Form(
      key: _formKey,
      child: Column(
        children: <Widget>[
          Text("Log in here: "),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextFormField(
              controller: usernameController,
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                labelText: 'Username:',
              ),
              // The validator receives the text that the user has entered.
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Please enter your username';
                }
                return null;
              },
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextFormField(
              controller: passphraseController,
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                labelText: 'Passphrase:',
              ),
              // The validator receives the text that the user has entered.
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Please enter your passphrase';
                }
                return null;
              },
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextFormField(
              controller: oneTimeCodeController,
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                labelText: 'Two-factor token:',
              ),
              // The validator receives the text that the user has entered.
              validator: (value) {
                if (value == null || value.isEmpty || value.length != 6) {
                  return 'Please enter a valid 6-char 2FA token';
                }
                return null;
              },
            ),
          ),
          ElevatedButton(
            onPressed: () {
              // Validate returns true if the form is valid, or false otherwise.
              if (_formKey.currentState!.validate()) {
                ScaffoldMessenger.of(
                  context,
                ).showSnackBar(const SnackBar(content: Text('Logging in')));
                appState.tryLogin(
                  usernameController.text,
                  passphraseController.text,
                  oneTimeCodeController.text,
                );
              }
            },
            child: const Text('Submit'),
          ),
        ],
      ),
    );
  }
}

// Let's add the source list page...
// Define the Source List view
class SourceListView extends StatelessWidget {
  const SourceListView({super.key});

  @override
  Widget build(BuildContext context) {
    var appstate = context.watch<MyAppState>();

    return Container(
      width: 350,
      color: const Color.fromARGB(255, 154, 195, 241),
      child: ListView.separated(
        scrollDirection: Axis.vertical,
        padding: const EdgeInsets.all(8),
        itemCount: appstate.sourceList.length,
        itemBuilder: (BuildContext context, int index) {
          return SizedBox(height: 50, child: Text(appstate.sourceList[index]));
        },
        separatorBuilder: (BuildContext context, int index) => const Divider(),
      ),
    );
  }
}

class SourceListPage extends StatelessWidget {
  const SourceListPage({super.key});

  @override
  Widget build(BuildContext context) {
    var appstate = context.watch<MyAppState>();
    String sourceText = "No Sources";
    if (appstate.sourceList.isNotEmpty) {
      sourceText = "${appstate.sourceList.length} Sources";
    }

    return Scaffold(
      body: Column(
        children: [
          Row(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.all(10.0),
                child: Text(sourceText),
              ),
              ElevatedButton.icon(
                onPressed: () {
                  appstate.syncSources();
                },
                icon: Icon(Icons.sync),
                label: Text('Sync'),
              ),
              SizedBox(width: 10),
              ElevatedButton(
                onPressed: () {
                  appstate.logout();
                },
                child: Text('Logout'),
              ),
            ],
          ),
          Expanded(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                SourceListView(),
                Expanded(child: Placeholder()),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
