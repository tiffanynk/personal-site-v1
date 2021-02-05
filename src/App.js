import './App.css';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Tester from './components/tester';
function App() {
  return (
    <div className="container">
      <div className="screen-left">
        <Navigation/>
      </div>
      <div className='mobile'>
        <Tester />
      </div>
      <div className="screen-right">
        <Content />
        {/* <Projects /> */}
      </div>
    </div>
  );
}

export default App;
