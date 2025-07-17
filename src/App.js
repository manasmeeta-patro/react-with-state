import Counter from './Letcount';
import User from './user';
import './App.css';
function App() {
 let userName="mamani";
 let Name;
 const age = 22;
  return (
    
    <div>
    <Counter/>
    <User name={userName} age={age}/>
    <User name={Name} age={age}/>
    </div>
  )
}

export default App;
