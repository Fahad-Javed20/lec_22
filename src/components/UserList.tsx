import type { UserType } from "../types/UserType";

interface UserListProps {
  user: UserType[];
}

const UserList = ({ user }: UserListProps) => {
  return (
    <div>
      {user.map((person) => (
        <div key={person.id} className=" w-full grid grid-cols-3">
            <p>{person.id}</p>
          <p>{person.username}</p>
          <p>{person.nationality}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
