import React, {Component} from 'react';
// import OwlCarousel from 'react-owl-carousel';
import '../../assets/css/style.scss';
import './style.scss';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Zoom from '../../assets/icon/Zoom';
import SliderSingle from '../../components/SliderSingle'


class ExamplesList extends Component {
    constructor(props)
    {
        super();
        this.tabsDefault=[
            {id:'1', name:'Строительство под ключ', active: true},
            {id:'2', name:'Внутренние работы', active: false},
            {id:'3', name:'Бетонные работы', active: false},
            {id:'4', name:'Строительство заборов', active: false},
            {id:'5', name:'Благоустройство территории', active: false}
        ]
        this.state = {
            currentIndex: 0,
            items: [1, 2, 3, 4, 5],
            tabs: this.tabsDefault,
            workInPlaceIndex: 1,
            concreteOfWork: 1,
        }
    }

    tabClick = (id) => {
        const updateArray=[];
        this.tabsDefault.map((el) => {
            el.active = (el.id === id);
            updateArray.push(el);
        });
        this.setState({tabs: updateArray, currentIndex: id})
    };

    Next = (key) => {
        let index = Number(this.state[key]) + 1;
        if ( index > 6 ) {
            index = 1
        };
        this.setState({[key]: index})
    };

    Back = (key) => {
        let index = Number(this.state[key]) - 1;
        if ( index < 0 ) {
            index = 6
        };
        this.setState({[key]: index})
    };

    render() {
        const { currentIndex, workInPlaceIndex, concreteOfWork } =this.state;
        return (
            <section id="design">
                <div className="centered">

                    <h2 className="text-align-center">

                        ПОСМОТРИТЕ НАШИ РАБОТЫ

                    </h2>


                    <div className="tabs-wrapper works-tabs-wrapper active">
                        <div className="tabs works-tabs">
                            {/* Single */}
                            {
                                this.state.tabs.map((el, i) =>
                                    <div className={`tab-item ${el.active ? 'active' : ''}`}
                                            onClick={() => {this.tabClick(el.id)}}>{el.name}</div>
                                )
                            }
                        </div>
                    </div>

                    <div className="tabs-content">
                        {(() => {
                            switch (currentIndex) {
                                case "1":   return <SliderSingle />;
                                case "2": return <div className="tab-content">

                                        {/* Slider */}
                                        <div className="single-slider-wrapper">
                                            <div className={`single-slider design-slider owl-carousel owl-loaded owl-drag ${currentIndex === 2 ? 'owl-hidden' : ''}`}>


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                <div className="owl-stage-outer">
                                                    <div className="owl-stage" style={{ transform: `translate3d(${-2970 - 990*(workInPlaceIndex)}px, 0px, 0px)`, transition: 'all 0s ease 0s; width: 11880px' }}>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/14-2.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-1">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/14-2.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/15-2.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-1">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/15-2.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/16-2.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-1">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/16-2.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className={`owl-item ${workInPlaceIndex === 1 ? 'active' : ''}`} >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/11-1.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-1">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/11-1.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className={`owl-item ${workInPlaceIndex === 2 ? 'active' : ''}`} ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/12-3.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-1">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/12-3.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className={`owl-item ${workInPlaceIndex === 3 ? 'active' : ''}`} ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/13-2.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-1">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/13-2.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className={`owl-item ${workInPlaceIndex === 4 ? 'active' : ''}`} ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/14-2.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-1">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/14-2.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className={`owl-item ${workInPlaceIndex === 5 ? 'active' : ''}`} ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/15-2.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-1">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/15-2.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className={`owl-item ${workInPlaceIndex === 6 ? 'active' : ''}`} ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/16-2.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-1">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/16-2.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/11-1.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-1">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/11-1.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/12-3.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-1">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/12-3.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/13-2.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-1">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/13-2.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                    </div>
                                                </div>
                                                <div className="owl-nav">
                                                    <button type="button" role="presentation" className="owl-prev" onClick={() =>{this.Back('workInPlaceIndex')}}><span
                                                        aria-label="Previous">‹</span></button>
                                                    <button type="button" role="presentation" className="owl-next" onClick={() => {this.Next('workInPlaceIndex')}}><span
                                                        aria-label="Next" >›</span></button>
                                                </div>
                                                <div className="owl-dots disabled"></div>
                                            </div>
                                        </div>

                                    </div>;
                                case "3":  return <div className="tab-content">

                                        {/* Slider */}
                                        <div className="single-slider-wrapper">
                                            <div
                                                className={`single-slider design-slider owl-carousel owl-loaded owl-drag ${currentIndex === 3 ? 'owl-hidden' : ''}`}>


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                <div className="owl-stage-outer">
                                                    <div className="owl-stage" style={{ transform: `translate3d(${-2970 - 990*(concreteOfWork)}px, 0px, 0px)`, transition: 'all 0s ease 0s; width: 11880px' }}>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/34-1.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-3">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/34-1.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/35-1.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-3">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/35-1.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/36-1.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-3">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/36-1.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className={`owl-item ${concreteOfWork === 1 ? 'active' : ''}`} >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/31.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-3">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/31.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className={`owl-item ${concreteOfWork === 2 ? 'active' : ''}`} ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/32-1.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-3">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/32-1.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className={`owl-item ${concreteOfWork === 3 ? 'active' : ''}`} ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/33-1.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-3">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/33-1.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className={`owl-item ${concreteOfWork === 4 ? 'active' : ''}`} ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/34-1.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-3">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/34-1.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className={`owl-item ${concreteOfWork === 5 ? 'active' : ''}`} ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/35-1.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-3">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/35-1.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className={`owl-item ${concreteOfWork === 6 ? 'active' : ''}`} ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/36-1.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-3">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/36-1.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/31.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-3">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/31.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/32-1.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-3">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/32-1.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/33-1.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-3">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/33-1.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                    </div>
                                                </div>
                                                <div className="owl-nav">
                                                    <button type="button" role="presentation" className="owl-prev" onClick={() => {this.Back('concreteOfWork')}}><span
                                                        aria-label="Previous">‹</span></button>
                                                    <button type="button" role="presentation" className="owl-next" onClick={() => {this.Next('concreteOfWork')}}><span
                                                        aria-label="Next">›</span></button>
                                                </div>
                                                <div className="owl-dots disabled"></div>
                                            </div>
                                        </div>

                                    </div>;
                                case "4":  return <div className="tab-content">

                                        {/* Slider */}
                                        <div className="single-slider-wrapper">
                                            <div
                                                className={`single-slider design-slider owl-carousel owl-loaded owl-drag ${currentIndex === 4 ? 'owl-hidden' : ''}`}>


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                <div className="owl-stage-outer">
                                                    <div className="owl-stage">
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/24-2.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-2">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/24-2.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/25-2.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-2">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/25-2.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/26-1.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-2">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/26-1.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item active" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/21-1.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-2">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/21-1.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item" ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/22-2.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-2">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/22-2.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className="owl-item" ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/23-2.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-2">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/23-2.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className="owl-item" ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/24-2.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-2">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/24-2.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className="owl-item" ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/25-2.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-2">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/25-2.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className="owl-item" ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/26-1.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-2">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/26-1.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/21-1.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-2">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/21-1.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/22-2.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-2">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/22-2.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/23-2.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-2">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/23-2.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                    </div>
                                                </div>
                                                <div className="owl-nav">
                                                    <button type="button" role="presentation" className="owl-prev"><span
                                                        aria-label="Previous">‹</span></button>
                                                    <button type="button" role="presentation" className="owl-next"><span
                                                        aria-label="Next">›</span></button>
                                                </div>
                                                <div className="owl-dots disabled"></div>
                                            </div>
                                        </div>

                                    </div>;
                                case "5":  return <div className="tab-content">

                                        {/* Slider */}
                                        <div className="single-slider-wrapper">
                                            <div
                                                className={`single-slider design-slider owl-carousel owl-loaded owl-drag ${currentIndex === 5 ? 'owl-hidden' : ''}`}>


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                {/* Single */}


                                                <div className="owl-stage-outer">
                                                    <div className="owl-stage">
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/44.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-4">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/44.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/45.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-4">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/45.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/46.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-4">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/46.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image" />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item" ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/41.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-4">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/41.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className="owl-item" ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/42.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-4">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/42.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className="owl-item" ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/43.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-4">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/43.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image" />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className="owl-item" ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/44.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-4">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/44.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image"  />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className="owl-item" ><a
                                                            href="http://am24.by/wp-content/uploads/2019/01/45.jpg"
                                                            className="single-slider-design-media show-zoom"
                                                            data-fancybox="design-4">

                                                            <img
                                                                src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/45.jpg&amp;w=970&amp;h=450"
                                                                alt="" className="single-slider-media -item-image"  />

                                                            <span className="photo-overlay"></span>
                                                            <span className="photo-border"></span>

                                                            <Zoom />

                                                        </a></div>
                                                        <div className="owl-item active" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/46.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-4">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/46.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image"  />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/41.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-4">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/41.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image"  />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/42.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-4">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/42.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image"  />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                        <div className="owl-item cloned" >
                                                            <a href="http://am24.by/wp-content/uploads/2019/01/43.jpg"
                                                               className="single-slider-design-media show-zoom"
                                                               data-fancybox="design-4">

                                                                <img
                                                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/43.jpg&amp;w=970&amp;h=450"
                                                                    alt="" className="single-slider-media -item-image"  />

                                                                <span className="photo-overlay"></span>
                                                                <span className="photo-border"></span>

                                                                <Zoom />

                                                            </a></div>
                                                    </div>
                                                </div>
                                                <div className="owl-nav">
                                                    <button type="button" role="presentation" className="owl-prev"><span
                                                        aria-label="Previous">‹</span></button>
                                                    <button type="button" role="presentation" className="owl-next"><span
                                                        aria-label="Next">›</span></button>
                                                </div>
                                                <div className="owl-dots disabled"></div>
                                            </div>
                                        </div>

                                    </div>;
                                default: return <SliderSingle />;
                            }}
                        )()}
                    </div>


                </div>
            </section>
        );
    }
}

export default ExamplesList;