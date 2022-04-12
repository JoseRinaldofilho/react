const Events = () => {
    const handleMyevent = (e) => {
        console.log(e );
    //    return alert('oi teste')
    }
    const testeFusaoRederiza = (x) => {
        if (x) {
            return 'rederreioza'
        }else{
            return "nao rederiza <br>" 
        }

    }
    return (
        <div>
             <button onClick={handleMyevent}>Clique Aqui</button>
             <button onClick={() => console.log('clicou aquii')}>clique aqui tambem</button><br />
        
             {testeFusaoRederiza(true)} <br />
             {testeFusaoRederiza(false)}
        </div>
       
    )
    
}

export default Events
