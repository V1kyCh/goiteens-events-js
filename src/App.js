import './App.css';
import eventsData from './upcoming-events.json'

import { PageBoard } from './components/Pageboard/PageBoard.jsx';

function App() {
  return (
    <div className="App">
          <PageBoard data={eventsData} />
    </div>
  );
}

export default App;
