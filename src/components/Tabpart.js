import React, {Component} from 'react';
import {AvForm,AvField} from 'availity-reactstrap-validation';

class Tabpart extends Component {
    render() {
        return (
            <div>
                <div className={'card cardHover rounded-0'}>
                    <div className={'card-body d-flex '}>
                        <img src={'images/sullivan1.jpg'}  className={'rounded-circle'} style={{width:"50px",height:"50px"}}/>
                        <div className={'text-left mx-4'}>
                            <h5 className={'font-weight-bold text-dark mb-0'}>Bessie Cooper</h5>
                            <span className={'mb-0 spanFont  '}>Salom ustoz</span>
                        </div>
                        <div>
                            <span>21:43</span>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tabpart;