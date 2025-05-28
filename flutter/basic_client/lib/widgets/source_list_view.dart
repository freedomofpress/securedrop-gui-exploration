import 'package:basic_client/main.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class SourceListView extends StatefulWidget {
  const SourceListView({super.key});

  @override
  State<SourceListView> createState() => _SourceListViewState();
}

class _SourceListViewState extends State<SourceListView> {
  @override
  Widget build(BuildContext context) {
    var appstate = context.watch<MyAppState>();

    return Container(
      width: 350,
      child: ListView.builder(
        scrollDirection: Axis.vertical,
        padding: const EdgeInsets.all(8),
        itemCount: appstate.sourceList.length,
        itemBuilder: (BuildContext context, int index) {
          return ListTile(
            enabled: true,
            title: Text(appstate.sourceList[index]),
            tileColor: appstate.selectedSource == index ? const Color.fromARGB(255, 117, 188, 255) : Color.fromARGB(255, 227, 229, 255),
            selected: index == appstate.selectedSource,
            onTap: () {
              setState(() {
                appstate.selectSource(index);
              });
            },
          );
        },
      ),
    );
  }
}
