import 'package:basic_client/main.dart';
import 'package:basic_client/widgets/source_list_view.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

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
