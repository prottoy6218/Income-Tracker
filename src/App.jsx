import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./Expenses";
import HomePage from "./HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/expensesTracker" element={<Expenses />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
