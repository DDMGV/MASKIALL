import React, {useState, useEffect, useMemo} from "react";
import './styles/App.css';
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import axios from "axios";
import UserFilter from "./components/UserFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {useUsers} from './hooks/useUsers';

function App() {
  const [users, setUsers] = useState( [])
  const [filter, setFilter] = useState ( {sort: '', query: ''})
  const [modal, setModal] = useState( false)
  const sortedAndSearchedUsers = useUsers(users, filter.sort, filter.query);

  useEffect( () => {
    fetchUsers()
  }, [])

  const createUser = (newUser) => {
    setUsers( [...users, newUser])
    setModal( false)
  }

    async function fetchUsers() {
      const response = await axios.get( 'http://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    }

    const removeUser = (user) => {
      setUsers(users.filter(p => p.id !== user.id))
    }


  return (
    <div className="App">

      <div className="button" style={{marginTop: 30}} onClick={() => setModal( true)}>
        <span>Создать пользователя</span> 
      </div>
      
      

      <MyModal visible={modal} setVisible={setModal}>
        <UserForm create={createUser}/>
      </MyModal>
      
      <hr style={{margin: '15px 0'}}/>
        <UserFilter filter={filter} setFilter={setFilter}/>
        <UserList remove={removeUser} users={sortedAndSearchedUsers} title="Список пользователей"/>
    </div>
  );
}

export default App;
