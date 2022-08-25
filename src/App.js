import './App.css';
import Header from './Header';
import Home from './components/Home';
import Courses from './components/Courses';
import Programs from './components/Programs';
import Teachers from './components/Teachers';
function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Courses />
      <Programs />
      <Teachers />
    </div>
  );
}

export default App;
