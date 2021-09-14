
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import "./dostlikdon.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducers} from "./redux/reducers/rootReducers";
import thunk from "redux-thunk";

const store=createStore(rootReducers,compose(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
      <BrowserRouter>
              <App/>
      </BrowserRouter>
</Provider>,document.getElementById("root"));