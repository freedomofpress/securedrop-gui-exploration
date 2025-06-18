import { useRef } from "react";
import { Button } from "@radix-ui/themes";
import { Form } from "radix-ui";
import { useAppDispatch, useAppSelector } from "./hooks";
import type { SessionState } from "./features/session/sessionSlice";
import { set, clear } from "./features/session/sessionSlice";
import { ProxyRequest } from "../ipc/types";

const JOURNALIST_API_BASE = "/api/v1"; // see "vite.config.ts"
const JOURNALIST_API = {
  token: `${JOURNALIST_API_BASE}/token`,
};

function Login() {
  const session = useAppSelector((state) => state.session);
  const dispatch = useAppDispatch();

  const authenticate = async function () {
    const body = {
      username: username.current?.value,
      passphrase: passphrase.current?.value,
      one_time_code: totp.current?.value,
    };
    console.log("sent login request");
    const res = await window.electronAPI.request({
      method: 'POST',
      path_query: JOURNALIST_API.token,
      stream: false,
      body: JSON.stringify(body),
      headers: {}
    } as ProxyRequest);
    console.log("finished login request");
    try {
      const data = JSON.parse(JSON.parse(res.stdout).body);
      console.log(data);
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
    console.log("dispatched");
  };

  const username = useRef<HTMLInputElement>(null);
  const passphrase = useRef<HTMLInputElement>(null);
  const totp = useRef<HTMLInputElement>(null);
  return (
	<Form.Root className="FormRoot" onSubmit={(event) => {
    event.preventDefault();
    authenticate();
  }}>
		<Form.Field className="FormField" name="username">
			<div
				style={{
					display: "flex",
					alignItems: "baseline",
					justifyContent: "space-between",
				}}
			>
				<Form.Label className="FormLabel">Username</Form.Label>
				<Form.Message className="FormMessage" match="valueMissing">
					Username is required
				</Form.Message>
			</div>
			<Form.Control asChild>
				<input type="text" required value="journalist" ref={username} />
			</Form.Control>
		</Form.Field>
		<Form.Field className="FormField" name="passphrase">
			<div
				style={{
					display: "flex",
					alignItems: "baseline",
					justifyContent: "space-between",
				}}
			>
				<Form.Label className="FormLabel">Passphrase</Form.Label>
				<Form.Message className="FormMessage" match="valueMissing">
					Passphrase is required
				</Form.Message>
			</div>
			<Form.Control asChild>
				<input type="password" required value="correct horse battery staple profanity oil chewy" ref={passphrase} />
			</Form.Control>
		</Form.Field>
		<Form.Field className="FormField" name="totp">
			<div
				style={{
					display: "flex",
					alignItems: "baseline",
					justifyContent: "space-between",
				}}
			>
				<Form.Label className="FormLabel">TOTP</Form.Label>
				<Form.Message className="FormMessage" match="valueMissing">
					TOTP is required
				</Form.Message>
			</div>
			<Form.Control asChild>
				<input type="text" required ref={totp} />
			</Form.Control>
		</Form.Field>
		<Form.Submit asChild>
			<Button>
				Log In
			</Button>
		</Form.Submit>
	</Form.Root>
  );
}

export default Login;
