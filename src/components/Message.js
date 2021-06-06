import React, {Component} from 'react';
import {Modal, ModalBody} from "reactstrap";

class Message extends Component {
    state={
        time:new Date()
    }
    changeTime=()=>{
        this.setState({
            time:this.state.time.getHours
        })
    }

    render() {
        const {time}=this.state;
        return (
            <div>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-md-12">
                            <Modal isOpen={this.props.open} toggle={this.props.changeModal}>
                                <ModalBody>
                                   <div className={'col-md-6 bg-danger'}>
                                       <div className={'my-5'}>
                                           <h4>Send message to...</h4>
                                           <p>+9989* *** ** 59</p>
                                       </div>
                                       <div className={'d-flex justify-content-around'}>
                                           <span style={{width:"12px",height:"1px",backgroundColor:'black'}}></span>
                                           <span style={{width:"12px",height:"1px",backgroundColor:'black'}}></span>
                                           <span style={{width:"12px",height:"1px",backgroundColor:'black'}}></span>
                                           <span style={{width:"12px",height:"1px",backgroundColor:'black'}}></span>
                                           <span style={{width:"12px",height:"1px",backgroundColor:'black'}}></span>
                                           <span style={{width:"12px",height:"1px",backgroundColor:'black'}}></span>
                                       </div>
                                       {/*<div>{time}</div>*/}
                                   </div>
                                </ModalBody>
                            </Modal>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Message;