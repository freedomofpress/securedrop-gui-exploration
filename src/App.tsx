import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAppSelector, useAppDispatch } from "./hooks";
import type { SessionState } from "./features/session/sessionSlice";
import { set, clear } from "./features/session/sessionSlice";

const JOURNALIST_API_BASE = "/api/v1"; // see "vite.config.ts"
const JOURNALIST_API = {
  token: `${JOURNALIST_API_BASE}/token`,
};

function App() {
  const session = useAppSelector((state) => state.session);
  const dispatch = useAppDispatch();

  const authenticate = async function () {
    const body = {
      username: username.current?.value,
      passphrase: passphrase.current?.value,
      one_time_code: totp.current?.value,
    };
    const res = await fetch(JOURNALIST_API.token, {
      method: "POST",
      body: JSON.stringify(body),
    });
    try {
      const data = await res.json();
      dispatch(
        set({
          expiration: data.expiration,
          journalist_uuid: data.journalist_uuid,
          journalist_first_name: data.journalist_first_name,
          journalist_last_name: data.journalist_last_name,
        } as SessionState)
      );
    } catch (e) {
      console.error(e);
      console.log(res);
      dispatch(clear());
    }
  };

  const username = useRef<HTMLInputElement>(null);
  const passphrase = useRef<HTMLInputElement>(null);
  const totp = useRef<HTMLInputElement>(null);
  return (
    <>
      <div>
        <pre>{JSON.stringify(session)}</pre>
      </div>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            id="username"
            type="text"
            ref={username}
            value="journalist"
          />

          <Form.Label htmlFor="passphrase">Passphrase</Form.Label>
          <Form.Control
            id="passphrase"
            type="passphrase"
            ref={passphrase}
            value="correct horse battery staple profanity oil chewy"
          />

          <Form.Label htmlFor="totp">TOTP</Form.Label>
          <Form.Control id="totp" type="text" ref={totp} />
          <Form.Text>
            Copy-paste the current TOTP token from the{" "}
            <a href="https://demo.securedrop.org/">SecureDrop demo server</a>.
          </Form.Text>
        </Form.Group>

        <Button onClick={() => authenticate()}>Log In</Button>
      </Form>
    </>
  );
}

export default App;
