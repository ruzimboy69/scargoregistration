import React from 'react';
import "../Pdp project/PdpStyle.css"

function HeaderPart(props) {
    return (
        <div>
            <div className={"container"}>
                <div className={'row'}>
                    <div className={'col-md-12 p-3 d-flex '}>
                        <img className={'logo'} src={"./images/logo.jpg"}/>
                        <div>
                            <img className={'vector'} src={"./images/icon.jpg"}/>
                            <p>Barcha kurslar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPart;