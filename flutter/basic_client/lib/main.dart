import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
import 'package:provider/provider.dart';

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
          colorScheme: ColorScheme.fromSeed(seedColor: const Color.fromARGB(255, 64, 83, 146)),
      )  ,
        home: const SDMain(title: 'SD Flutter test'),
      )
    );
  }
}

class MyAppState extends ChangeNotifier {
  // global application state lives here - we'd likely use something like Bloc for state management in a "real" app
  String authToken = '';
  // gonna ignore token expiry for now but we'd need to keep an eye on it otherwise
  // authExpiry = DateTime.now()
  final sourceList = <String>[];

  void syncSources() {
    // real sync goes here - this just adds 10 new random source names
    final newSources = generateWordPairs().take(10);
    for (final s in newSources){
      sourceList.add(s.asCamelCase);
      notifyListeners();
    }
  }

  void tryLogin() {
    // banana is the token, the token is banana
    authToken = "banana";
    notifyListeners();
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
  }
  else {
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


  @override
  Widget build(BuildContext context) {
    var appState = context.watch<MyAppState>();

    return Form (
      key: _formKey,
      child: Column(
      children: <Widget> [
        Text("Log in here: "),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: TextFormField(
            decoration: const InputDecoration(
              border:OutlineInputBorder(),
              labelText: 'Username:'
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
                        decoration: const InputDecoration(
              border:OutlineInputBorder(),
              labelText: 'Passphrase:'
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
                        decoration: const InputDecoration(
              border:OutlineInputBorder(),
              labelText: 'Two-factor token:'
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

                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('Logging in')),
                  );
                appState.tryLogin();
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
      child: Flexible(
        child: ListView.separated(

          scrollDirection: Axis.vertical,
          padding: const EdgeInsets.all(8),
          itemCount: appstate.sourceList.length,
          itemBuilder: (BuildContext context, int index) {
            return SizedBox(

              height: 50,
              child:  Text(appstate.sourceList[index]),
            );
          },
          separatorBuilder: (BuildContext context, int index) => const Divider(),
        ),
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
      sourceText  = "${appstate.sourceList.length} Sources";
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
                Expanded(child: Placeholder())
              ],
            ),
          ),
        ]
      ),
    );
  }
}
