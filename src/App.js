import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './components/Home';
import Courses from './components/Courses';
import Programs from './components/Programs';
import Teachers from './components/Teachers';
import WhyUs from './components/WhyUs';
import Message from './components/Message';
import Footer from './Footer';
function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Courses />
      <Programs />
      <Teachers />
      <WhyUs />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
