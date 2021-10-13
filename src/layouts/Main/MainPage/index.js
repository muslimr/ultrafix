import React, {useCallback, useContext, useEffect, useReducer} from 'react';
import {useHttp, useWindowDimensions} from "../../../hooks";
import {AuthContext} from "../../../context/AuthContext";
import {MyServiceIcon} from "../../../components/custom/MyServiceIcon";
import {Col, Container, Row} from "react-bootstrap";
import DividerLine from "../../../components/custom/DividerLine";
import ContactUs from "./components/contact-us";
import ImageGallery from 'react-image-gallery';
import Prices from "./components/prices";



const MainPage = () => {

    const [state, setState] = useReducer((prevState, newState) => {
            return {...prevState, ...newState}
        }, {
            loading: false,
            refreshing: false,
            success: false,
            error: false,
            dataToSend: {
                name: "",
                phone: "",
                email: "",
            },
            listData: [],
            count: 0,
            data: [],
            goToSlide: 0,
            offsetRadius: 1,
            // config: config.gentle
        }
    );

    const {loading, request} = useHttp();
    const {token} = useContext(AuthContext);
    const dimensions = useWindowDimensions();

    const getCategories = useCallback( async () => {
        try {
            const fetched = await request('api/category', "GET", null, {});
            setState({...state, listData: fetched})
        } catch (e) {}
    }, [token, request]);


    const serviceBoxes = [
        'Refrigerator',
        'Ice Machine',
        'Washer',
        'Dryer',
        'Dishwasher',
        'Oven',
        'Cooktop',
        'Microwave',
        'Wine Cooler',
        'Freezer',
    ];

    const {breakpoint} = useWindowDimensions();


    const images = [
        {original: '/assets/JPG/ultrafix1.jpg'},
        {original: '/assets/JPG/ultrafix2.jpg'},
        {original: '/assets/JPG/ultrafix3.jpg'},
        {original: '/assets/JPG/ultrafix4.jpg'},
        {original: '/assets/JPG/ultrafix5.jpg'},
        {original: '/assets/JPG/ultrafix6.jpg'},
        {original: '/assets/JPG/ultrafix7.jpg'},
        {original: '/assets/JPG/ultrafix8.jpg'},
    ];


    return(
        <div className='d-flex flex-column align-items-center' style={{minHeight: '100vh'}}>
            <div className='d-flex align-items-end'
                 style={{
                     position: 'relative',
                     width: '100%',
                     minHeight: breakpoint === "sm" ? 200 : 450,
                     marginTop: breakpoint === "sm" ? 70 : 90,
                     background: 'linear-gradient(to right, #2583F0, #0551A8)'
                 }}
            >
                <img src={`/assets/SVG/Ultrafix-icon-for-bg.svg`}
                     style={{position: 'absolute', width: breakpoint === "sm" ? 250 : 500}}
                />

                <div className={`d-flex flex-column align-items-end p-${breakpoint === "sm" ? "4" : "5"}`}
                     style={{zIndex: 5, width: '100%'}}
                >
                    <div className={"main-slogan"}>Make Appliances Great Again !</div>

                    <div className={`d-flex flex-column align-items-${breakpoint === "sm" ? "start" : "end"}`} style={{width: "100%"}}>
                        <div style={{
                            marginTop: breakpoint === "sm" ? 40 : 70,
                            textAlign: breakpoint !== "sm" && 'right',
                            width: breakpoint === "sm" ? "100%" : "60%",
                            wordWrap: 'break-word',
                            fontSize: breakpoint === "sm" ? 30 : 60,
                            lineHeight: 1,
                            fontWeight: breakpoint === "sm" ? 600 : 500,
                            color: '#fff'
                        }}>
                            <img src={`/assets/SVG/calling-phone.svg`}
                                 style={
                                     breakpoint === "sm"
                                         ? {width: 30, marginRight: 15, marginBottom: 10}
                                         : {width: 70, marginRight: 30, marginBottom: 10}
                                 }
                            />
                            (832) 998-0886
                        </div>

                        <div style={{
                            marginTop: breakpoint === "sm" ? 0 : 20,
                            textAlign: (breakpoint !== "sm") && "right",
                            width: breakpoint === "sm" ? "100%" : "60%",
                            wordWrap: 'break-word',
                            fontSize: breakpoint === "sm" ? 16 : 22,
                            lineHeight: 1,
                            fontWeight: 400,
                            color: '#fff'
                        }}>
                            Call now and book your service technician
                        </div>
                    </div>
                </div>
            </div>


            {/**  SERVICES section  **/}
            <div id={"services"} style={{marginBottom: 50}}/>

            <div className='d-flex flex-column w-100'>
                <div style={breakpoint === "sm" ? {marginLeft: 25, marginTop: 20} : {marginLeft: 100, marginTop: 50}}>
                    <div style={{
                        fontSize: breakpoint === "sm" ? 30 : 42,
                        fontWeight: breakpoint === "sm" ? 600 : 500,
                        color: '#003168',
                    }}>
                        Our Services
                    </div>
                    <DividerLine color={'#D2D2D2'}/>
                </div>

                <Container fluid style={{padding: breakpoint === "sm" ? "30px 25px" : "40px 80px"}}>
                    <Row xs="2" sm="2" md="3" lg="4" xl="5">
                        {
                            serviceBoxes.map((item, index) =>
                                <Col className='service-box-container'>
                                    <div className='service-box'>
                                        <MyServiceIcon
                                            name={item.toLowerCase()}
                                            className={'service-icon'}
                                        />
                                    </div>
                                    <div className='service-box-label'>{item}</div>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>


            {/**  PRICES section  **/}
            <div id={"prices"} style={{marginBottom: 30}}/>
            <Prices />

            {/**  CONTACT US section  **/}
            <div id={"contact"} />
            <ContactUs />

            {/**  IMAGE SLIDER section  **/}
            <div style={{width: "100%"}}>
                <ImageGallery items={images}
                              fullscreen={true}
                              autoPlay={true}
                              showFullscreenButton={false}
                              showPlayButton={false}
                              showBullets={true}
                              useBrowserFullscreen={true}
                              className={"my-image-gallery"}
                />
            </div>
        </div>
    );
}

export default MainPage;

