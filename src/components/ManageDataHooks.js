import {useState} from 'react'

const ManageDataHooks = () => {

    let someData = 10;
    console.log(someData);

   const [number, setNumber] = useState(10); // tem que importa
   console.log(number);

    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>MUda Valor</button>
            </div>

            <div>
                <p>Valor com hooks: {number} </p>
                <button onClick={() => setNumber(25)}>muda estado</button>
            </div>

        </div>
    )
}

export default ManageDataHooks


