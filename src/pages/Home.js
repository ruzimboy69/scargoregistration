import React, {Component} from 'react';
import Header from "../dostlikdoncomponents/Header";
import HeaderCarousel from "../dostlikdoncomponents/HeaderCarousel";

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HeaderCarousel/>
            </div>
        );
    }
}

export default Home;