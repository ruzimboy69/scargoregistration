import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {TOKEN_NAME} from "../tools/constant";


class AdminLayout extends Component {
    render() {
        return (
            <div>
                <div className={'admin-navbar'}></div>
                <div className={'admin-layout'}>
                    <div className={'left-side'}>
                        <div className={'admin'}>
                            <div className={'circle'}>
                            </div>
                            <div className={'userName'}>
                                 Ruzimboy
                                <div className={'status'}>
                                    Admin
                                </div>
                            </div>
                        </div>
                        <ul className={'nav flex-column'}>
                            <li className={'nav-item'}>
                                <Link to={"/admin/news"} className={'nav-link'}>Yangiliklar</Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link to={"/admin/menu"} className={'nav-link'}>Menu</Link>
                            </li>
                            <li className={'nav-item mt-5'}>
                                <Link onClick={()=>localStorage.removeItem(TOKEN_NAME)} to={"/"} className={'nav-link'}>Chiqish</Link>
                            </li>


                        </ul>
                    </div>
                    <div className={'right-side'}>
                        {this.props.children}
                    </div>
                </div>

            </div>
        );
    }
}

export default AdminLayout;