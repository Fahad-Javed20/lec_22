
import { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import type { UserType } from './types/UserType'

function App() {
  const [users,setUsers] = useState<UserType[]>([])

  const addUser = (user:UserType)=>{
    setUsers((prev)=>[...prev,user])
  }
  return (
    <>
    <div className='flex flex-col gap-42'>

<h1 className=" text-white bg-black py-1 font-semibold text-xl">Users List:</h1>
<div>
{users.map((user)=>(
 <UserList user = {user} key={user.id}/>
))}
     
</div>
      <UserForm onAddUser = {addUser} />
    </div>
    </>
  )
}

export default App
