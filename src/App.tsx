import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAppSelector, useAppDispatch } from "./hooks";
import { set, clear } from "./features/session/sessionSlice";

function App() {
  const session = useAppSelector((state) => state.session);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <pre>{JSON.stringify(session)}</pre>
      </div>
      <Form>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control id="username" type="text" />

        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control id="password" type="password" />

        <Form.Label htmlFor="totp">TOTP</Form.Label>
        <Form.Control id="totp" type="text" />

        <Button>Log In</Button>
      </Form>
    </>
  );
}

export default App;
