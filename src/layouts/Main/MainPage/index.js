import React, {useCallback, useContext, useEffect, useReducer} from 'react';
import {useHttp, useWindowDimensions} from "../../../hooks";
import {AuthContext} from "../../../context/AuthContext";
import { config } from "react-spring";
import {MyServiceIcon} from "../../../components/custom/MyServiceIcon";
import {Col, Container, Row} from "react-bootstrap";
import DividerLine from "../../../components/custom/DividerLine";
import MyInput from "../../../components/custom/MyInput";
import {Button} from "@material-ui/core";
import ContactUs from "./components/contact-us";


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
            config: config.gentle
        }
    );

    // const isMobile = useIsMobile();
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
                    {
                        // dimensions.width > 1200 &&
                        <img src={`/assets/SVG/Ultrafix-icon-for-bg.svg`}
                             style={{position: 'absolute', width: breakpoint === "sm" ? 250 : 500}}
                        />
                    }

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

            <div className='d-flex flex-column w-100 pb-5'>
                <div style={breakpoint === "sm" ? {marginLeft: 25, marginTop: 20} : {marginLeft: 100, marginTop: 50}}>
                    <div style={{
                        fontSize: breakpoint === "sm" ? 30 : 42,
                        fontWeight: breakpoint === "sm" ? 600 : 500,
                        color: '#003168'
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
                                            // style={breakpoint === "sm" && {maxWidth: 50, fontSize: 30}}
                                        />
                                    </div>
                                    <div className='service-box-label'>{item}</div>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>


            {/**  CONTACT US section  **/}
            <div id={"contact"} />
            <ContactUs />


            <img src={`/assets/JPG/technician1.jpg`} style={{width: '100%', marginBottom: 10}}/>
            <img src={`/assets/PNG/technician2.png`} style={{width: '100%', marginBottom: 10}}/>

        </div>
    );
}

export default MainPage;

