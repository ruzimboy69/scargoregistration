import React, {Component} from 'react';
import {AvForm,AvField} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {loginUser} from "../redux/action/authAction";
class Login extends Component {
    Login =(event,value)=>{
        this.props.loginUser(value,this.props.history);
    }
    render() {
        return (
            <div>
                <div className={'container'}>
                    <div className={'row vh-100 align-items-center '}>
                        <div className={'col-md-4 offset-4'}>
                            <div className={'card'}>
                                <div className={'card-header bg-success'}>
                                    <h4 className={'text-white text-center'}>Login page</h4>
                                </div>
                                <div className={'card-body text-center'}>
                                    <AvForm onValidSubmit={this.Login}>
                                        <AvField
                                            type={'text'}
                                            name={'phoneNumber'}
                                            placeholder={"number"}
                                            className={"my-3"}
                                       required
                                        />
                                        <AvField
                                            type={'password'}
                                            name={'password'}
                                            placeholder={"Password"}
                                            required
                                        />
                                        <button disabled={this.props.isLoader} type={'submit'} className={'btn  btn-success   my-2'}>
                                            {this.props.isLoader?
                                                <span className={'spinner-border spinner-border-sm'}/>
                                                :" "
                                            }
                                            Login</button>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function getState(state) {
    return{
        isLoader:state.login.isLoader
    }
}

export default connect(getState,{loginUser})(Login);