import {useState} from "react";

const ListRender = () => {

    const [users, setUsers] = useState([
        {id: 1, name: 'jose'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Pedro'},
    ]);
   const deleteRandom = () => {
       // contsnte rando medor floor para pegar o valor aleatorio
       const randomNumber = Math.floor(Math.random() * 3);

       setUsers((prevUsers) => {
           // estado atual
           console.log(prevUsers);
           return prevUsers.filter((user) => randomNumber !== user.id);
       })
    };

  return (
      <div>
         <ul>
             {/*list com os names*/}
             {users.map((item, i) => (
                 <li key={i}>{item.name}</li>
             ))}
         </ul>
          <button onClick={deleteRandom}>Delete</button>


      </div>
  )
}

export default ListRender
