import { BrowserRouter as Router } from "react-router-dom";
import Sideber from "./components/Sideber";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sideber />
      </div>
    </Router>
  );
};

export default App;
