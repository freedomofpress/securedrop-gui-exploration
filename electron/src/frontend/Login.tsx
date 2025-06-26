import { useRef } from "react";
import { Button, Form, Input } from 'antd';
import { useAppDispatch, useAppSelector } from "./hooks";
import type { SessionState } from "./features/session/sessionSlice";
import { set, clear } from "./features/session/sessionSlice";
import { ProxyRequest } from "../ipc/types";

const JOURNALIST_API_BASE = "/api/v1"; // see "vite.config.ts"
const JOURNALIST_API = {
  token: `${JOURNALIST_API_BASE}/token`,
};

type FieldType = {
  username: string;
  passphrase: string;
  totp: string;
};

function Login() {
  const session = useAppSelector((state) => state.session);
  const dispatch = useAppDispatch();

  const authenticate = async function (fields: FieldType) {
    const body = {
      username: fields.username,
      passphrase: fields.passphrase,
      one_time_code: fields.totp,
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
      <Form
        onFinish={authenticate}>
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Passphrase"
            name="passphrase"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item<FieldType>
            label="TOTP"
            name="totp"
            rules={[{ required: true }]}
          >
            <Input.OTP />
          </Form.Item>

        <Button block type="primary" htmlType="submit">Log In</Button>
      </Form>
  );
}

export default Login;
