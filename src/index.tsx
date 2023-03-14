import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './i18n';
import "./index.css";
import App from "./App";
import SocketContextComponent from './components/Socket/SocketContextComponent'


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <SocketContextComponent>
      <App />
    </SocketContextComponent>
  </BrowserRouter>
);
