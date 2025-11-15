import { useState } from "react";
import type { UserType } from "../types/UserType";

interface UserFormProps {
  onAddUser: (user: UserType) => void;
}

const UserForm = ({ onAddUser }: UserFormProps) => {
  const [username, setUserName] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [id, setId] = useState<number>();

  const handelSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onAddUser({ username, nationality, id: 0 });
    setUserName("");
    setNationality("");
    setId(0);
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
              onChange={(e) => setId(Number(e.target.value))}
              className="border h-8 px-2"
              type="number"
              name=""
              id=""
              value={id}
              placeholder="Enter Id"
            />
            <input
              onChange={(e) => setUserName(e.target.value)}
              className="border h-8 px-2"
              type="text"
              name=""
              id=""
              value={username}
              placeholder="User Name"
            />
            <input
              onChange={(e) => setNationality(e.target.value)}
              className="border h-8 px-2"
              type="text"
              name=""
              id=""
              value={nationality}
              placeholder="Nationality"
            />
          </div>
          <button
            onClick={() => onAddUser}
            className="bg-blue-600 text-white py-2 mt-4 px-4 w-40 rounded-md shadow-2xl "
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
