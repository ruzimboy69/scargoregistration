import React, {Component} from 'react';
import Registration from "./Registration";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";
class Navbar extends Component {
    state = {
        isOpen: false,
        secondOpen:false,
        time:59,
        isAccount:false
    }
    changeModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    secondModal=()=>{
        this.setState({
            isOpen: !this.state.isOpen,
            secondOpen:!this.state.secondOpen,
        });
        this.countTime()
    }
    countTime=()=>{
        setInterval(this.delay,1000)
    }
    delay=()=>{
        let minute=this.state.time;
        if (minute<=0) {
            this.state.time=0+"0";
        }
        else {
            minute--;
            this.state.time = minute;
        }
        this.setState({
            time:this.state.time
        })
    }
    moveAccount=()=>{
      this.setState({
          isAccount:true,
          secondOpen:!this.state.secondOpen

      })
    }

    render() {
        const {isOpen,secondOpen,time,isAccount} = this.state
        return (
            <div>
                <nav className="navbar navbar-expand-lg d-block">
                    <div className="container d-flex">
                        <div className="nav-left">
                            <a className="navbar-brand">
                                <img className="logo image-fluid " style={{width:"100%"}} src="/images/bg.jpg"  alt="logo"/></a>
                        </div>

                        <div className="nav-right">
                            {!isAccount
                                ?
                                <div>
                                    <button className="btn btn-outline-primary mr-2">
                                        Kirish
                                    </button>
                                    <button className="btn btn-primary" onClick={this.changeModal}>
                                        Ro'yhatdan o'tish
                                    </button>
                                </div>
                                :
                                <div className={'navbar d-flex'}>
                                    <div className={'text-white'}>{}</div>
                                    <div className={'px-2 py-1 rounded-circle user'}> <i className="far fa-user "></i></div>
                                    <div className={'px-2 py-1 rounded-circle user'}><i className="far fa-bell"></i></div>
                                </div>
                            }
                        </div>
                    </div>
                </nav>

                <Modal isOpen={isOpen} toggle={this.changeModal} backdrop="static">
                    <ModalHeader toggle={() => {

                        this.changeModal();
                    }}>Ro'yxatdan o'tish</ModalHeader>
                    <ModalBody>
                        <AvForm onValidSubmit={isOpen}>
                            <AvField
                                type="text"
                                style={{width: "100%", opacity: "0.7"}}
                                placeholder="F.I.SH..."
                                name="firstName"
                                required
                            />
                            <AvField
                                type="text"
                                style={{width: "100%", opacity: "0.7"}}
                                className="my-3"
                                placeholder="Telefon raqami..."
                                name="telnumber"
                                required
                            />
                            <AvField
                                type="email"
                                style={{width: "100%", opacity: "0.7"}}
                                placeholder="emailni kiriting"
                                name="email"
                                required
                            />
                            <AvField
                                type="password"
                                style={{width: "100%", opacity: "0.7"}}
                                className="my-3"
                                placeholder="password"
                                name="model"
                                required
                            />
                            <button onClick={this.secondModal}  type={'submit'} className="btn btn-primary my-3"
                                    style={{width: "100%"}}>Registratsiya
                            </button>
                        </AvForm>
                    </ModalBody>
                </Modal>
                <Modal isOpen={secondOpen} toggle={this.secondModal} >
                    <ModalBody>
                        <div className={'col-md-6 offset-3'}>
                            <div className={"my-3 text-center"}>
                                <h3 >Send message to</h3>
                                <h5 className={'my-3'} >+9989* *** ** 59</h5>
                            </div>
                            <div className={'d-flex justify-content-around my-5'}>
                                <span style={{width:"12px",height:"1px",backgroundColor:'black'}}></span>
                                <span style={{width:"12px",height:"1px",backgroundColor:'black'}}></span>
                                <span style={{width:"12px",height:"1px",backgroundColor:'black'}}></span>
                                <span style={{width:"12px",height:"1px",backgroundColor:'black'}}></span>
                                <span style={{width:"12px",height:"1px",backgroundColor:'black'}}></span>
                                <span style={{width:"12px",height:"1px",backgroundColor:'black'}}></span>
                            </div>
                            <h3 className={"text-center my-3"}>00:{time}</h3>
                            <button onClick={this.moveAccount} className={'btn btn-primary p-2 btn-block'} style={{width:"100%"}}>Yuborish</button>
                        </div>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}

export default Navbar;