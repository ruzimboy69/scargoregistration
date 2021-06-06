import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation'
import {Modal, ModalBody} from "reactstrap";

class SmartPark extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-md-12">
                            <Modal>
                                <ModalBody>
                                    <AvForm>
                                        <AvField
                                            type="email"
                                            style={{width:"100%",opacity:"0.7"}}
                                            placeholder="emailni kiriting"
                                            name="email"
                                            required
                                        />
                                        <AvField
                                            type="password"
                                            style={{width:"100%",opacity:"0.7"}}
                                            className="my-3"
                                            placeholder="password"
                                            name="password"
                                            required
                                        />
                                        <button type={'submit'} className="btn btn-primary my-3" style={{width:"100%"}}>Kirish</button>
                                    </AvForm>
                                </ModalBody>
                            </Modal>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default SmartPark;