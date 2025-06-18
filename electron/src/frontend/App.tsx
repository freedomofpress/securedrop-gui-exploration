import SessionView from "./SessionView";
import Login from "./Login";
import SourceList from "./SourceList";
import { useAppSelector } from "./hooks";
import { Container } from "react-bootstrap";

function App() {
  const session = useAppSelector((state) => state.session);
  if (session.journalist_uuid !== undefined) {
    return (
      <Container>
        <SessionView />
        <SourceList />
      </Container>
    );
  }
  return (
      <Login />
  );
}

export default App;
