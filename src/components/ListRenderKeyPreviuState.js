import {useState} from "react";

const ListRender = () => {

    const [list,] = useState(['jose','patrick','calebe','davi','Mateus']);

    const [users] = useState([
        {ìd: 1, name: 'jose'},
        {ìd: 2, name: 'patrick'},
        {ìd: 3, name: 'calebe'},
        {ìd: 4, name: 'davi'},
        {ìd: 5, name: 'Mateus'},
    ]);

  return (
      <div>
         {/*<ul>*/}
         {/*    /!*list com os names*!/*/}
         {/*    {list.map((item, i) => (*/}
         {/*        <li key={i}>{item}</li>*/}
         {/*    ))}*/}
         {/*</ul>*/}
          {/*ESSE E CERTO USAR*/}
          <ul>
              {users.map((use)=> (
                  <li key={use.ìd}>
                      {use.name} -*- {use.ìd}
                  </li>
              ))}
          </ul>



      </div>
  )
}

export default ListRender
