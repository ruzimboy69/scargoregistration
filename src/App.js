// import React, {useState} from 'react';
// import {createContext} from "react";
// import {connect} from "react-redux";
// import Products from "./components/Products";
// import AddTask from "./components/AddTask";
// export const MyContext=createContext();
//
// function App(props) {
//     const [isOpen,setModalVisible]=useState(false);
//     function changeName(){
//         props.setName("roy")
//     }
//     return (
//         <MyContext.Provider value={{firstName:'Ali',lastName:"Vali"}}>
//         <div>
//             <div className={'container'}>
//                 <div className={'row my-5'}>
//                     <div className={'col-md-4'}>
//                         <div className={'card'}>
//                             <div className={'card-body text-center'}>
//                                 <h4>{props.firstName}</h4>
//                                 <button onClick={changeName}>ChangeName</button>
//                                 <h4>{props.age}</h4>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={'col-md-4'}>
//                         <div className={'card'}>
//                             <div className={'card-body text-center'}>
//                                 <h4>{props.title}</h4>
//                                 <h4>{props.price}</h4>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Products/>
//                 <div className={'row my-5'}>
//                     <div className={'col-md-4 offset-4'}>
//                         <AddTask/>
//                     </div>
//                 </div>
//             </div>
//
//         </div>
//
//         </MyContext.Provider>
//     );
// }
// function getState(state){
//   return {
//       firstName:state.reducer.name,
//       age:state.reducer.age,
//       price:state.productReducer.price,
//       title:state.productReducer.title,
//   }
// }
// function getDispatch(dispatch) {
//     return {
//         setName:(name)=>{
//             console.log('worked')
//             dispatch({type:"SET_NAME",payload:name})
//         }
//     }
// }
// const a=connect(getState,getDispatch);
// export default a(App);


import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Info from "./pages/Info";
import AdminLayout from "./pages/AdminLayout";
import News from "./dostlikdoncomponents/News";
import Menus from "./dostlikdoncomponents/Menus";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./dostlikdoncomponents/NotFound";
import PrivateRoute from "./dostlikdoncomponents/PrivateRoute";

function App(props) {
    return (
        <div>
          <BrowserRouter>
              <Switch>
                  <Route path={"/"} exact component={Home}/>
                  <Route path={"/login"} exact component={Login}/>
                  <PrivateRoute path={"/Info"} exact  component={Info}/>
                  <PrivateRoute path={"/Admin"}  exact component={AdminLayout}/>
                  <PrivateRoute path={"/admin/news"} exact component={News}/>
                  <PrivateRoute path={"/admin/menu"} exact component={Menus}/>
                  <Route component={NotFound}/>
              </Switch>
          </BrowserRouter>
            <ToastContainer/>

        </div>
    );
}

export default App;