import { History } from "./routes/history";
import { Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Wrapper from "./components/Wrapper";
import Alert from "./components/Alert";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container text-3xl text-white bg-blue-700 w-full font-bold py-5 pl-20" data-cy="header-title" >
        TO DO LIST
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
