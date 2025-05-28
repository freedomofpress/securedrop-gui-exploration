import 'package:basic_client/main.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class SourceListView extends StatelessWidget {
  const SourceListView({super.key});

  @override
  Widget build(BuildContext context) {
    var appstate = context.watch<MyAppState>();

    return Container(
      width: 350,
      color: const Color.fromARGB(255, 133, 222, 255),
      child: ListView.separated(
        scrollDirection: Axis.vertical,
        padding: const EdgeInsets.all(8),
        itemCount: appstate.sourceList.length,
        itemBuilder: (BuildContext context, int index) {
          return SizedBox(
            height: 40, 
            child: Center(child: Text(appstate.sourceList[index])));
        },
        separatorBuilder: (BuildContext context, int index) => const Divider(),
      ),
    );
  }
}
