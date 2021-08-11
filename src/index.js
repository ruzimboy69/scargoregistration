
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import store   from "./components/store";
import {BrowserRouter} from "react-router-dom";



ReactDom.render(
    <Provider store={store}>
      <BrowserRouter>
              <App/>
      </BrowserRouter>
</Provider>,document.getElementById("root"));