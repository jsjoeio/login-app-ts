import { useState, ChangeEvent, FormEvent } from "react";

type PasswordMatchProps = {
  passwordMatch: null | boolean;
};

function PasswordMatch({ passwordMatch }: PasswordMatchProps) {
  if (passwordMatch === null) return null;

  return (
    <p id="password-match-msg">
      Passwords {passwordMatch ? "" : "do not"} match.
    </p>
  );
}

export function SignupForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordMatch, setPasswordMatch] = useState<null | boolean>(null);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === confirmPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-black">Hello world!</h1>
      <h2>User Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setUsername(event.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(event.target.value)
            }
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <PasswordMatch passwordMatch={passwordMatch} />
    </div>
  );
}
