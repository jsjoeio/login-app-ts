import { useState, ChangeEvent, FormEvent } from "react";

type PasswordMatchProps = {
  passwordMatch: null | boolean;
  password: string;
  confirmPassword: string;
};

function PasswordMatch({ passwordMatch, password, confirmPassword }: PasswordMatchProps) {
  const passwordOrConfirmPasswordMissing = password === "" || confirmPassword === "";
  const notEmptyAndMatch = !passwordOrConfirmPasswordMissing && passwordMatch;
  if (passwordMatch === null) return null;

  return <p className={`text-${notEmptyAndMatch ? "white" : "red"}-500 text-xs italic`}>Passwords {notEmptyAndMatch ? "" : "do not"} match.</p>;
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
    <div className="w-full max-w-xs">
      <form className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-[#4d91db] text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#4d91db] leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={username}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setUsername(event.target.value)
            }
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#4d91db] text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border border-white-500 rounded w-full py-2 px-3 text-[#4d91db] mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
          <label className="block text-[#4d91db] text-sm font-bold mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border border-white-500 rounded w-full py-2 px-3 text-[#4d91db] mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(event.target.value)
            }
          />
          <PasswordMatch passwordMatch={passwordMatch} password={password} confirmPassword={confirmPassword} />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[#4d91db] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
