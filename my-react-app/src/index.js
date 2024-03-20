import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import RavenNav from "./Raven2/RavenNav";

const container = document.getElementById("root");
container.parentElement.setAttribute('class', 'bg-dark text-white')
const root = ReactDOM.createRoot(container);
root.render(<RavenNav/>)