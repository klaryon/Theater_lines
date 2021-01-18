import './App.css';
import Lines from './components/Lines'
import { LINES } from './shared/texts'

function App() {
  const lines = LINES;
  
  return (
    <div>
      <Lines lines={lines} />
    </div>

  );
}

export default App;
