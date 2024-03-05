import { Header, Sidebar } from './components';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="grid-container h-screen">
       
    <Header/>
    <Sidebar/>
    <Home/>
    </div>
  );
}

export default App;
