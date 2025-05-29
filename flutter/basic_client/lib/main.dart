import 'package:basic_client/pages/login_form.dart';
import 'package:basic_client/pages/source_list_page.dart';
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
            seedColor: const Color.fromARGB(255, 43, 100, 255),
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

  final jsonEncoder = JsonEncoder();

  Map<String, dynamic> toJson() => {
    'method': method,
    'path_query': pathQuery,
    'stream': stream,
    'body': body,
    'headers': headers,
  };

  String payload() {
    final jsonEncoder = JsonEncoder();
    return jsonEncoder.convert(toJson());
  }
}

class MyAppState extends ChangeNotifier {
  // global application state lives here - we'd likely use something like Bloc for state management in a "real" app
  String authToken = '';
  String journalistName = '';
  // gonna ignore token expiry for now but we'd need to keep an eye on it otherwise
  // authExpiry = DateTime.now()
  final sourceList = <String>[];

  int selectedSource = -1;

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

      proc.stdin.writeln(proxyRequest.payload());
      final List<String> lOut = [];

      await proc.stdout.transform(utf8.decoder).forEach(lOut.add);

      final sOut = lOut.join('\n');

      var theCode = await proc.exitCode;
      print("Exit Code is $theCode");
      return sOut;
    }
  }

  void syncSources() {
    // real sync goes here - this just adds 10 new random source names
    final newSources = generateWordPairs().take(10);
    for (final s in newSources) {
      sourceList.add(s.asCamelCase);
      notifyListeners();
    }
  }

  void selectSource(int i) {
    selectedSource = i;
    notifyListeners();

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
        journalistName = username;
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
