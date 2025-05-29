import 'package:basic_client/main.dart';
import 'package:basic_client/widgets/source_list_view.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class SourceListPage extends StatelessWidget {
  const SourceListPage({super.key});

  @override
  Widget build(BuildContext context) {
    var appstate = context.watch<MyAppState>();
    String sourceText = "Hello ${appstate.journalistName}, No sources yet";
    if (appstate.sourceList.isNotEmpty) {
      sourceText = "Hello ${appstate.journalistName}, ${appstate.sourceList.length} sources found";
    }

    return Scaffold(
      body: Column(
        children: [
          Container(
            color: Color.fromARGB(255, 227, 229, 255),
            child: Row(
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
                ElevatedButton.icon(
                  onPressed: () {
                    appstate.logout();
                  },
                  icon: Icon(Icons.logout),
                  label: Text('Logout'),
                ),
              ],
            ),
          ),
          Expanded(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                SourceListView(),
                Flexible(
                  child: (appstate.selectedSource >= 0 && appstate.selectedSource < appstate.sourceList.length) ? 
                    Text("Conversation: ${appstate.sourceList[appstate.selectedSource]}") : 
                    Placeholder(),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
