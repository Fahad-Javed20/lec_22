import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import type { UserType } from "./types/UserType";

function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  const addUser = (user: UserType) => {
    setUsers((prev) => [...prev, user]);
  };
  return (
    <>
        <h1 className=" text-white bg-black py-1 font-semibold text-xl">
          Users List:
        </h1>
      <div className="flex flex-col">
        <div>
          {users.map((user) => (
            <UserList user={user} key={user.id} />
          ))}
        </div>

        <div className="mt-28">

        <UserForm onAddUser={addUser} />
        </div>
      </div>
    </>
  );
}

export default App;
