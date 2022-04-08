import { v4 as uuidv4 } from 'uuid';

let users=[

];
//create user
export const createUser= (req,res) => {
const user = req.body

users.push({...user, id: uuidv4()});

  res.send(`User by the name of ${users.firstName} added to the database`)
}

//get all users
export const getUsers= (req,res) => {(

  res.send(users)
)}

//get one user
export const getUserById=(req,res)=>{
  const { id } =req.params
  const fidnUser= users.find((user)=> user.id===id);
  res.send(req.params)
}

//delete user
export const deleteUser=(req,res)=>{
  const { id } =req.params
  users=users.filter((users)=>user.id != id)
  res.send(`User with the id of ${id} deleted`)
}

//update user
export const updateUser=(req,res)=>{
  let {firstName, lastName, age}= req.body
  const { id } =req.params
  const userUpdate=users.find((user)=>user.id===id)
  if(firstName){
    user.firstName=firstName
  }
  if(lastName){
    user.lastName=lasttName
  }
  if(age){
    user.age=age
  }
  res.send(`user with the id of ${id} has been updated`)
}
