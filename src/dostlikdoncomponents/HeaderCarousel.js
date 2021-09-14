import React, {Component} from 'react';
import Slider from "react-slick";

class HeaderCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className={'header-carousel'}>

                    <Slider {...settings}>
                        <div className={'item'}>
                            <div className={'text-center d-flex justify-content-center'}><img src={'images/hamkor.png'}/></div>
                            <div className={'text'}>
                                <div>   O`ZBEKISTON RESPUBLIKASI</div>
                                <div> "O`ZDONMAXSULOT" AKSIYADORLIK KOMPANIYASI</div>
                                <div>"DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI</div>
                            </div>
                        </div>
                        <div className={'item'}>
                            <div className={'text-center d-flex justify-content-center'}><img src={'images/hamkor.png'}/></div>
                            <div className={'text'}>
                                <div>   O`ZBEKISTON RESPUBLIKASI</div>
                                <div> "O`ZDONMAXSULOT" AKSIYADORLIK KOMPANIYASI</div>
                                <div>"DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI</div>
                            </div>
                        </div>
                        <div className={'item'}>
                            <div className={'text-center d-flex justify-content-center'}><img src={'images/hamkor.png'}/></div>
                            <div className={'text'}>
                                <div>   O`ZBEKISTON RESPUBLIKASI</div>
                                <div> "O`ZDONMAXSULOT" AKSIYADORLIK KOMPANIYASI</div>
                                <div>"DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI</div>
                            </div>
                        </div>
                    </Slider>
            </div>
        );
    }
}

export default HeaderCarousel;