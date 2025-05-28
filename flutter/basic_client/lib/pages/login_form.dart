import 'package:basic_client/main.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

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

    return Center(
      child: Container(
        margin: const EdgeInsets.all(10.0),
        width: 640,
        height: 480,
        child: Form(
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
        ),
      ),
    );
  }
}
