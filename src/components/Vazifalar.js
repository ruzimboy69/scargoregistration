import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Tab1 from "./Tab1";
import {AvForm,AvField} from 'availity-reactstrap-validation';
class Vazifalar extends Component {
    state={
        activeTab:'1',
        sendmessage:[],
        firstValue:false,
        secondValue:false,
        thirdValue:false,
        fourthValue:false,
        fifthValue:false
    };
    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        })
    };
    sendMessage=(event,value)=>{
        this.state.sendmessage.push(value)
        this.setState({
            sendmessage:this.state.sendmessage
        })
        console.log(this.state.sendmessage)
        this.form.reset();
    }
    changeStar=(value)=>{
        if(value==1){
            this.setState({
                firstValue:!this.state.firstValue
            })
        }else if(value==2){
            this.setState({
                secondValue:!this.state.secondValue
            })
        }else if (value==3){
            this.setState({
                thirdValue:!this.state.thirdValue
            })
        }else if(value==4){
            this.setState({
                fourthValue:!this.state.fourthValue
            })
        }else{
            this.setState({
                fifthValue:!this.state.fifthValue
            })
        }
    }
    render() {
        const {activeTab,sendmessage,firstValue,secondValue,thirdValue,fourthValue,fifthValue}=this.state;
        return (
            <div className={'d-flex'}>
                <div className="col-md-4  text-center">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                onClick={() => { this.changeTab('1'); }}
                            >
                                Vazifalar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => { this.changeTab('2'); }}
                            >
                                Chats
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col>
                                    <Tab1/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col>
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
                <div className={'col-md-5 m-0 positionparent'} style={{backgroundImage:'url(images/i.jpg)'}} >
                    <AvForm ref={(c) => this.form = c} onValidSubmit={this.sendMessage} action="/action_page_binary.asp" method="post" enctype="multipart/form-data">
                        <AvField
                            className="positionform"
                            type="text"
                            placeholder="write a message..."
                            name="text"
                        />
                        <button type={'submit'} className={'positionBtn'}> <i className="fab fa-telegram-plane"/></button>
                    </AvForm>
                    {sendmessage.map((item,index)=>(
                        <div className={' col-md-4 offset-7 my-1 sendedText'} key={index}>
                          {item.text}
                        </div>
                    ))}
                </div>
                <div className={'col-md-3 text-center'}>
                    <img src={'images/sullivan1.jpg'}  className={'rounded-circle'} style={{width:"70px",height:"70pxs"}}/>
                    <h5>Anna Maria</h5>
                    <div className={'d-flex justify-content-around my-4'}>
                        <button className={'accountbtn'}><i className="far fa-comment-dots icons rounded-circle"></i>
                            <p className={'paragraph'}>Chatga o'tish</p>
                        </button>
                        <button className={'accountbtn'}><i className="fas fa-info-circle icons rounded-circle"></i>
                            <p className={'paragraph'}>Kurs info</p>
                        </button>
                        <button className={'accountbtn'}><i className="far fa-calendar icons rounded-circle"></i>
                            <p className={'paragraph'}>Task history</p>
                        </button>
                    </div>
                    <div className={'d-flex justify-content-center my-2'}>
                        <button onClick={()=>this.changeStar(1)} className={'accountbtn'}><i className={!firstValue ? "fas fa-star color1":"fas fa-star color2"}></i></button>
                        <button onClick={()=>this.changeStar(2)} className={'accountbtn'}><i className={!secondValue? "fas fa-star color1":"fas fa-star color2"}></i></button>
                        <button onClick={()=>this.changeStar(3)} className={'accountbtn'}><i className={!thirdValue ? "fas fa-star color1":"fas fa-star color2"}></i></button>
                        <button onClick={()=>this.changeStar(4)} className={'accountbtn'}><i className={!fourthValue ? "fas fa-star color1":"fas fa-star color2"}></i></button>
                        <button onClick={()=>this.changeStar(5)} className={'accountbtn'}><i className={!fifthValue ? "fas fa-star color1":"fas fa-star color2"}></i></button>
                    </div>
                    <div className={'d-flex justify-content-around my-2'}>
                        <button className={'btn btn-danger py-1 rounded-0 px-5'}><i className="fas fa-check-double"></i></button>
                        <button className={'btn btn-success py-1 px-5 rounded-0'}><i className="fas fa-exclamation-triangle"></i></button>
                    </div>
                    <div className={'mt-5'}>
                        <h5>2.Fill yordamida berilgan animatsiyani yarating</h5>
                        <p className={'bordered'}>Kiritilgan string berilgan  indexdan boshlab qolgan qismini chop qiluvchi dastur yozing</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vazifalar;