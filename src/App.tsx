import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import type { UserType } from "./types/UserType";

function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  const handelAddUser = (user: UserType) => {
    const newUser = { ...user, id: users.length + 1 };
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <>
      <h1 className="text-white bg-black py-1 font-semibold text-xl">
        Users List:
      </h1>

      <div className="flex flex-col gap-10">
        <UserList user={users} />
        <UserForm onAddUser={handelAddUser} />
      </div>
    </>
  );
}

export default App;
