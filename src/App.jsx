import './App.css';
import { MyFirstComponent } from './components/MyFirstComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fundamentos de React</h1>
        <hr className="white-hr"/>
        <MyFirstComponent />
        <hr className="white-hr"/>
        <SecondComponent />
        <hr className="white-hr"/>
        <ThirdComponent 
        name = "Ines"
        last_name = "Bejarano" 
        />
        <hr className="white-hr"/>
      </header>
    </div>
  )
};

export default App
