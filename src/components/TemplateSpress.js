
const TemplateSpress = () => {

    // varivel
    const name = "Jose"
    // exemplo obj
    const data = {
        age: 31,
        job: "Programador"
    }
  
    return (
        <div>
            <h1>ola , {name} tudo bem ? </h1>
            <h4>vode tem qual profisao ? {data.job} minha idade e {data.age} </h4>
        </div>
    )
}

export default TemplateSpress;
