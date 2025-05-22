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
    // real sync goes here - this just adds 100 new random source names
    final newSources = generateWordPairs().take(100);
    for (final s in newSources){
      sourceList.add(s.asCamelCase);
      notifyListeners();
    }

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
    page = Placeholder(color: Color.fromARGB(255, 54, 133, 2));
  }
    else {
    page = Placeholder(color: Color.fromARGB(255, 111, 112, 199));
    }


    return Scaffold(
      appBar: AppBar(

        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      // Not sure we need the Center - it just wraps an Expanded Widget that basically takes up all available space
      body: Center(
        child: Expanded(
          child: Container(
            color: Theme.of(context).colorScheme.primaryContainer,
            child: page,
          )
        ),
      ),
    );
  }
}
