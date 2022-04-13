import {useState} from "react";

const ListRender = () => {

    const [list,] = useState(['jose','patrick','calebe','davi','Mateus']);

  return (
      <div>
         <ul>
             {/*list com os names*/}
             {list.map((item) => (
                 <li>{item}</li>
             ))}
         </ul>

      </div>
  )
}

export default ListRender
