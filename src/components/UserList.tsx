import type { UserType } from "../types/UserType";

interface UserListProps {
  user: UserType[];
}

const UserList = ({ user }: UserListProps) => {
  return (
    <div>
      {user.map((u) => (
        <div key={u.id} className=" w-full grid grid-cols-3">
            <p>{u.id}</p>
          <p>{u.username}</p>
          <p>{u.nationality}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
