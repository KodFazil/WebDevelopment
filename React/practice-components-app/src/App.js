import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

// const users = [
//   { name: "Ali", age: 12 },
//   { name: "Ahmet", age: 21 }
// ];

function App() {

  // users lar için state ve ekleme handler fonksiyonu
  const [usersList, setUsersList] = useState([]);
  const addUsersListHandler = (gelenUserData) => {
    console.log(gelenUserData);
    setUsersList( (previousUsersList) => {
      return[...previousUsersList, 
        { id: gelenUserData.id, name: gelenUserData.name, age: gelenUserData.age } ];
    } );
  }

  return (
    <div>
      <AddUser onAddUsersList={addUsersListHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
