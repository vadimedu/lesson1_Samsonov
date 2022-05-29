
import './App.css';
import FuncMessage from './Func-message';
import ClassMessage from './Class-message';
import Header from './Header';


export const App =() => {
  
const arr = []

  return (
    <div className="App">
      <Header></Header>
      <div className="App-header">
      <FuncMessage name= "Samsonov Vadim" setr = {arr} ></FuncMessage>
      <ClassMessage name= "Samsonov Vadim"></ClassMessage>
     
      </div>
    </div>
  );
}

export default App;
