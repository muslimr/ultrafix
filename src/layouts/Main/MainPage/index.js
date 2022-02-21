import React, {useCallback, useContext, useReducer, useState} from 'react';
import {useHttp, useWindowDimensions} from "../../../hooks";
import {AuthContext} from "../../../context/AuthContext";
import {MyServiceIcon} from "../../../components/custom/MyServiceIcon";
import {Col, Container, Row} from "react-bootstrap";
import DividerLine from "../../../components/custom/DividerLine";
import ContactUs from "./components/contact-us";
import Employees from "./components/employees";
import AboutUs from "./components/about-us";
import WhyUs from "./components/why-we";
import Brands from "./components/brands";
import Reviews from "./components/reviews";
import {Tooltip} from "antd";

import './styles/index.scss';
import {Link} from "react-router-dom";



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
        }
    );

    const {loading, request} = useHttp();
    const {token} = useContext(AuthContext);
    const dimensions = useWindowDimensions();
    const [emailTooltipText, setEmailTooltipText] = useState('Click to copy');

    const getCategories = useCallback( async () => {
        try {
            const fetched = await request('api/category', "GET", null, {});
            setState({...state, listData: fetched})
        } catch (e) {}
    }, [token, request]);


    const serviceBoxes = [
        {title: 'Refrigerator', value: 'refrigerator'},
        {title: 'Ice Machine', value: 'ice_machine'},
        {title: 'Washer', value: 'washer'},
        {title: 'Dryer', value: 'dyer'},
        {title: 'Dishwasher', value: 'dishwasher'},
        {title: 'Oven', value: 'oven'},
        {title: 'Cooktop', value: 'cooktop'},
        {title: 'Microwave', value: 'microwave'},
        {title: 'Wine Cooler', value: 'wine_cooler'},
        {title: 'Freezer', value: 'freezer'},
    ];

    const {breakpoint} = useWindowDimensions();


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

                <div style={{position: 'absolute', marginBottom: 40, marginLeft: 70, borderRadius: 10,}}>
                    <div style={{fontSize: 20, fontWeight: 300, color: '#fff', marginBottom: 10}}>
                        We have been providing
                        <b style={{fontSize: 22, marginLeft: 7, marginRight: 5, fontWeight: 600,}}>TOP SERVICES</b>
                    </div>
                    <img src={`/assets/PNG/recomended.png`}
                         style={{width: breakpoint === "sm" ? 150 : 600}}
                    />
                </div>

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
                            fontWeight: 300,
                            color: '#fff'
                        }}>
                            Call now and book your service technician
                        </div>
                    </div>
                </div>
            </div>

            {/**  SERVICES section  **/}
            <div id={"services"}/>

            <div className='d-flex flex-column w-100' style={{backgroundColor: '#EFF2F4'}}>
                <div style={breakpoint === "sm" ? {marginLeft: 25, marginTop: 40} : {marginLeft: 100, marginTop: 50}}>
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
                                <Link className='service-box-container' to={item.value}>
                                    <div className='service-box'>
                                        <MyServiceIcon
                                            name={item?.title?.toLowerCase()}
                                            className={'service-icon'}
                                        />
                                    </div>
                                    <div className='service-box-label'>{item?.title}</div>
                                </Link>
                            )
                        }
                    </Row>
                </Container>
            </div>

            {/**  PRICES section  **/}
            {/*<div id={"prices"} style={{marginBottom: 30}}/>*/}
            {/*<Prices />*/}

            {/**  ABOUT US section  **/}
            <div id={"about"} style={{marginBottom: 25}}/>
            <AboutUs />

            {/**  EMPLOYEES section  **/}
            <Employees />

            {/**  BRANDS section  **/}
            <div id={"brands"} style={{marginBottom: breakpoint !== "sm" && 50}}/>
            <Brands />

            {/**  REVIEWS section  **/}
            <div id={"reviews"} style={{marginBottom: breakpoint !== "sm" && 50}}/>
            <Reviews />

            {/**  CONTACT US section  **/}
            <div id={"contact"} />
            <ContactUs />

            {/**  WHY US section  **/}
            <div id={"whyus"} style={{marginBottom: breakpoint !== "sm" && 50}}/>
            <WhyUs />

            {/**  Fixed EMAIL box  **/}
            <Tooltip title={emailTooltipText}>
                <div
                    className="email_box"
                    onClick={() => {
                        navigator.clipboard.writeText("info@ultrafixappliance.com");
                        setEmailTooltipText('Copied');
                    }}
                    onMouseOver={() => setEmailTooltipText('Click to copy')}
                >
                    <img src={`/assets/SVG/email-icon.svg`}
                         style={{width: 20, marginRight: 10}}
                    />
                    <div style={{fontSize: 18, color: '#fff',}}>info@ultrafixappliance.com</div>
                </div>
            </Tooltip>
        </div>
    );
}

export default MainPage;

