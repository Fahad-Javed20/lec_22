import type { UserType } from "../types/UserType";

interface UserListProps {
  user: UserType[];
}

const UserList = ({ user }: UserListProps) => {
  return (
    <div className="grid grid-cols-3 mt-1">
      {user.map((u) => (
        <p key={u.id}>{u.username} {u.nationality}</p>
      ))}
    </div>
  );
};

export default UserList;
