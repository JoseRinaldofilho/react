// importando o component FirstComponet e TemplateSpress
import FirstComponet from './components/FirstComponet';
import TemplateSpress from './components/TemplateSpress';

import logo from './logo.svg';
import './App.css';
import Mycomponet from './components/Mycomponet';
import Events from './components/Events';
import Challenge from './components/Challenge';

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
        

       
      
    </div>
  );
}

export default App;


