import { useAppSelector } from "./hooks";


function SessionView() {
  const session = useAppSelector((state) => state.session);
  return (
      <details>
        <summary>
          Hello{" "}
          {!!session.journalist_first_name && session.journalist_last_name
            ? `{session.journalist_first_name} {session.journalist_last_name}`
            : session.journalist_uuid}
        </summary>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </details>
  );
}

export default SessionView;
