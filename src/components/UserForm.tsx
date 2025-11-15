import { useState } from "react";
import type { UserType } from "../types/UserType";

interface UserFormProps {
  onAddUser: (user: UserType) => void;
}

const UserForm = ({ onAddUser }: UserFormProps) => {
  const [username, setUserName] = useState("");
  const [nationality, setNationality] = useState("");

  const handelSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddUser({username,nationality});

    setUserName("");
    setNationality("");
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/3">
        <form onSubmit={handelSubmit}>
          <h1 className="bg-black text-white text-2xl py-2 font-semibold">
            User Registration Form
          </h1>

          <div className="flex gap-4 flex-col mt-5">
            <input
              onChange={(e) => setUserName(e.target.value)}
              className="border h-8 px-2"
              type="text"
              value={username}
              placeholder="User Name"
            />

            <input
              onChange={(e) => setNationality(e.target.value)}
              className="border h-8 px-2"
              type="text"
              value={nationality}
              placeholder="Nationality"
            />
          </div>

          <button
            className="bg-blue-600 text-white py-2 mt-4 px-4 w-40 rounded-md shadow-2xl"
            type="submit"
          >
            ADD USER
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
