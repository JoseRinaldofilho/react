
const Challenge = () => {
 

        const a = 10
        const b = 15
        let total = console.log(a+b)
    
   

    return (
        <div>
           
           <h4>A: {a} </h4>
           <h4>A: {b} </h4>
           <h4></h4>
            <button onClick={() => console.log(a+b)}>clique a</button> <br />
            <button onClick={() => alert("total ", a+b)}> total</button>
        </div>
    )
}

export default Challenge
