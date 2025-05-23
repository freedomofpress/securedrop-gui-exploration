import SessionView from "./SessionView";
import Login from "./Login";
import { useAppSelector } from "./hooks";

function App() {
  const session = useAppSelector((state) => state.session);
  if (session.journalist_uuid !== undefined) {
    return (
      <>
        <SessionView />
      </>
    );
  }
  return (
    <>
      <Login />
    </>
  );
}

export default App;
