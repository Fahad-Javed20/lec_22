import type { UserType } from "../types/UserType";

interface UserListProps {
  user: UserType;
}
const UserList = ({ user }: UserListProps) => {
  return (
      <div className="grid grid-cols-3 mt-5">
        <p>{user.id}</p>
        <p>{user.username}</p>
        <p>{user.nationality}</p>
      </div>
  );
};

export default UserList;
