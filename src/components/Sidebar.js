import React, {Component} from 'react';
import Employee from './Employee';
import Posts from './Posts';
import PostView from "./PostView";
import SmartPark from "./SmartPark";
import Registration from "./Registration";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Vazifalar from "./Vazifalar";
class Sidebar extends Component {
    state={
        sidebar:true
    };

    openSidebar=()=>{
        this.setState({
            sidebar:!this.state.sidebar
        })
    }
    render() {
        const {sidebar}=this.state;
        return (
            <Router>
                <div className={'sidebar'}>
                    <div className={sidebar ? "left-site":'closeLeft-site'}>
                        <div className={'container'}>
                            <div className={'row my-2'}>
                                <div className={'col-md-12'}>
                                    <img src={'images/logo.jpg'} className={sidebar ? 'offset-3 mb-5':'offset-6 mb-5 ml-5'}/>
                                    <ul className={sidebar ? 'd-block ':'d-none'}>
                                        <li className={'list-unstyled  d-flex '}>
                                            <Link to={"/Dashboard"}> <i className="fas fa-columns mx-3"></i>Dashboard</Link>
                                        </li>
                                        <li className={'list-unstyled'}>
                                            <Link to={"/kurslar"}><i className="fas fa-swatchbook mx-3"></i>Barcha kurslar</Link>
                                        </li>
                                        <li className={'list-unstyled'}>
                                            <Link to={"/vazifalar"}><i className="fas fa-tasks mx-3"></i>Vazifalar va chat</Link>
                                        </li>
                                        <li className={'list-unstyled'}>
                                            <Link to={"/Qurilmalar"}><i className="far fa-comment-dots mx-3"></i>Qurilmalar</Link>
                                        </li>
                                        <li className={'list-unstyled'}>
                                            <Link to={"/Zoom"}><i className="fas fa-video mx-3"></i>Zoom chat</Link>
                                        </li>
                                        <li className={'list-unstyled'}>
                                            <Link to={"/Posts"}><i className="fas fa-cog mx-3"></i>Posts</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={ "right-site"}>
                        <div className={'navbar d-flex'}>
                           <div>Xolmurotov Ruzimboy</div>
                           <div className={'px-2 py-1 rounded-circle user'}> <i className="far fa-user "></i></div>
                            <div className={'px-2 py-1 rounded-circle user'}><i className="far fa-bell"></i></div>
                        </div>
                        <div className={'container'}>
                            <div className={'row my-1'}>
                                <div className={'col-md-12 mt-5'}>
                                    <Switch>
                                        <Route path="/Dashboard" exact>
                                            <Registration/>
                                        </Route>
                                        <Route path="/kurslar">

                                        </Route>
                                        <Route path="/vazifalar">
                                            <h2 className={'mb-4 mx-4'}>Vazifalar va chat</h2>
                                            <Vazifalar/>
                                        </Route>
                                        <Route path="/Qurilmalar">
                                            <Employee/>
                                        </Route>
                                        <Route path="/Zoom">
                                            <SmartPark/>
                                        </Route>
                                        <Route path="/Posts/:id">
                                            <PostView/>
                                        </Route>
                                        <Route path="/Posts">
                                            <Posts/>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Sidebar;