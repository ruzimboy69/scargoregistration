import React, {Component, useState} from 'react';
import Sidebar from "./components/Sidebar";

class App extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
            </div>
        );
    }
}


export default App;
// import React, {useState} from 'react';
// import childComponents from './components/childComponents';
//
// function App(props) {
//     let a=useState(0);
//     let myState=a[0];
//     let mySetState=a[1];
//     let b=useState(0);
//     let secondState=b[0];
//     let secondSetState=b[1];
//     function addYurdi() {
//         mySetState(myState+secondState)
//     }
//     function addQadam(){
//         secondSetState(secondState+1)
//     }
//
//
//     return (
//         <div>
//             <div className={'container'}>
//                 <div className={'row'}>
//                     <div className={'col-md-4'}>
//                         <h1>Yurdi:{myState}</h1>
//                         <button onClick={addYurdi}>+</button>
//                         <h1>Qadam:{secondState}</h1>
//                         <button onClick={addQadam}>+</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default App;