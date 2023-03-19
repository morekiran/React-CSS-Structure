import './App.css';
import Home from './components/Home/Home';
import Input from './components/Input/Input';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Input/>
      <Card/>
    </div>
  );
}

export default App;
