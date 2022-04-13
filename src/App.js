// importando o component FirstComponet e TemplateSpress
import FirstComponet from './components/FirstComponet';
import TemplateSpress from './components/TemplateSpress';

import logo from './logo.svg';
import './App.css';
import Mycomponet from './components/Mycomponet';
import Events from './components/Events';
import Challenge from './components/Challenge';
import City from './assets/logoTeste.png';
import ManageDataHooks from './components/ManageDataHooks';

function App() {
  return (
    <div className="App">
      
     <h1>hello word React 1</h1>
      
      
      <h4> <i> emme fucunou</i></h4>
        <b> aqui esta o outro component -  <FirstComponet/></b>
        <TemplateSpress/>
        <Mycomponet />
        <Events />
        <Challenge />
        {/* imagens public */}
        <div>
          <img src="logo192.png" alt="logo react" />
        </div>
        {/* img asset */}
        <div>
          <img src={City} alt="logo" />
        </div>
        <ManageDataHooks />

       
      
    </div>
  );
}

export default App;


