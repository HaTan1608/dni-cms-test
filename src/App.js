import logo from "./logo.svg";
import "./App.css";
import FormScreen from "./pages/FormScreen";
import { BrowserRouter ,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
