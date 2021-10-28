import { History } from "./routes/history";
import { Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Wrapper from "./components/Wrapper";
import Alert from "./components/Alert";
import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <div
          data-cy="header-background"
          className="text-3xl text-white w-full font-bold py-5 pl-20"
          style={{ backgroundColor: "#16abf8" }}
        >
          <h2 data-cy="header-title">TO DO LIST APP</h2>
        </div>
      </div>
      <Router history={History}>
        <Wrapper>
          <AppRoutes />
        </Wrapper>
      </Router>
      <Alert />
      <div data-cy="modal-delete"></div>
      <div data-cy="modal-information"></div>
    </div>
  );
}

export default App;
