import type { UserType } from "../types/UserType"

interface UserListProps {
    user:UserType;
}
const UserList = ({user}:UserListProps) => {
    
  return (
    <div className="flex justify-center">
        
    <div>
        <p>{user.id}</p>
        <p>{user.username}</p>
        <p>{user.nationality}</p>
    </div>
    </div>
  )
}

export default UserList
