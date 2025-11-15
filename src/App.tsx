import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import type { UserType } from "./types/UserType";

function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  const addUser = (user: UserType) => {
    user.id = users.length + 1
    setUsers((prev) => [...prev, user]);
  };
  return (
    <>
        <h1 className=" text-white bg-black py-1 font-semibold text-xl">Users List:</h1>
      <div className="flex flex-col">
          <UserList user = {users}/>
        <UserForm onAddUser={addUser} />
        </div>
    </>
  );
}

export default App;
