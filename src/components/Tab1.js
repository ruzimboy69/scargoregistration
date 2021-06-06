import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Tabpart from "./Tabpart";
import {AvField, AvForm} from "availity-reactstrap-validation";

class Tab1 extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className={'sidebar '}>
                        <div>
                            <div className={'container pr-0'}>
                                <div className={'row'}>

                                    <div className={'col-md-12 p-0'}>
                                        <input type={'text'} className={'form-control rounded-0 py-3'} placeholder={' search...'}/>
                                        <ul className={'scrollItems'}>
                                            <li className={'list-unstyled m-0   d-flex'}>
                                                <Link to={"/Dashboard"}><Tabpart/></Link>
                                            </li>
                                            <li className={'list-unstyled m-0   d-flex'}>
                                                <Link to={"/kurslar"}><Tabpart/></Link>
                                            </li>
                                            <li className={'list-unstyled m-0   d-flex'}>
                                                <Link to={"/vazifalar"}><Tabpart/></Link>
                                            </li>
                                            <li className={'list-unstyled m-0   d-flex '}>
                                                <Link to={"/Qurilmalar"}><Tabpart/></Link>
                                            </li>
                                            <li className={'list-unstyled m-0   d-flex '}>
                                                <Link to={"/Zoom chat"}><Tabpart/></Link>
                                            </li>
                                            <li className={'list-unstyled m-0   d-flex '}>
                                                <Link to={"/Sozlamalar"}><Tabpart/></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={'col-md-12'}>
                                        <Switch>
                                            <Route path="/Dashboard" exact>
                                                <h1>ininini</h1>
                                            </Route>
                                            <Route path="/kurslar">
                                            </Route>
                                            <Route path="/vazifalar">

                                            </Route>
                                            <Route path="/Qurilmalar">

                                            </Route>
                                            <Route path="/Zoom chat">

                                            </Route>
                                            <Route path="/Sozlamar">

                                            </Route>
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Tab1;