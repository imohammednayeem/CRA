import './DesignPatterns/App.css';
import SplitScreen from './DesignPatterns/SplitScreen';

const LeftHandComponent = () => {
  return (
    <div>
      <h1 style={{backgroundColor : 'green'}}>Left Hand Component</h1>
    </div>
  );
}
const RightHandComponent = () => {
  return (
    <div>
      <h1 style={{backgroundColor : 'red'}}>Right Hand Component</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SplitScreen left={LeftHandComponent} right={RightHandComponent}/>
    </div>
  );
}

export default App;
