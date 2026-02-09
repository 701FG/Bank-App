import { useState } from "react";
import Button from "../components/Button";
import InfoCard from "../components/InfoCard";
import TextField from "../components/TextField";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");

  return (
    <div className="login">
      <div className="login__header">
        <span className="eyebrow">Welcome to Bank</span>
        <h1 className="title">Secure access, calm control.</h1>
        <p className="subtitle">
          Sign in with your Bank username and 4-digit PIN. Admin and teller access
          are routed automatically once authentication is enabled.
        </p>
      </div>

      <div className="login__content">
        <div className="panel panel--elevated">
          <form className="stack" onSubmit={(event) => event.preventDefault()}>
            <TextField
              label="Username"
              placeholder="ENTER USERNAME"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
            />
            <TextField
              label="4-digit PIN"
              placeholder="••••"
              value={pin}
              onChange={(event) => setPin(event.target.value)}
              inputMode="numeric"
              maxLength={4}
              autoComplete="one-time-code"
              type="password"
            />
            <Button type="submit">Continue</Button>
          </form>
        </div>

        <InfoCard
          title="Phase 0 Scaffold"
          description="This login view establishes the baseline for the Bank experience. Upcoming phases will wire authentication, device fingerprints, and role-based routing."
          footer={<span className="caption">Next: persistent data + guards.</span>}
        />
      </div>
    </div>
  );
};

export default LoginPage;
