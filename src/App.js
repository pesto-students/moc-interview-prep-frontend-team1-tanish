import { BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes/Routes.js";
import './App.css';

function App() {
  return (
  
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
            <Routes />
      </Router>
    </div>
  );
}
export default App;
