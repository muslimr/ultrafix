import React, {useEffect, useReducer, useState} from 'react';
import './styles/index.scss';
import MyInput from "../../../components/custom/MyInput";
import {Tooltip} from "antd";
import {Button} from "@material-ui/core";
import {sendDataToClient} from "../../../actions/nodemail";
import {useHistory, useLocation} from 'react-router-dom';
import {SERVICES} from "../../../arrays/arrays";
import {MyServiceIcon} from "../../../components/custom/MyServiceIcon";
import {GoBackIcon} from "../../../assets/icons/GoBackIcon";
import {useWindowDimensions} from "../../../hooks";


const AboutPage = (props) => {
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
                message: "",
            },
            listData: [],
            count: 0,
            data: false,
            goToSlide: 0,
            offsetRadius: 1,
        }
    );

    const location = useLocation();
    const history = useHistory();
    const {breakpoint} = useWindowDimensions();
    let pageSlug = location?.pathname?.split('/about/')[1];


    function getDataBySlug(slug) {
        let dataFromArray = SERVICES.filter(item => item.value === slug);
        setState({
            ...state,
            data: dataFromArray[0],
            dataToSend: {
                ...state.dataToSend,
                message: `Hi, I need help with repair ${dataFromArray[0]?.title.toLowerCase()}`
            }
        });
    }


    useEffect(() => {
        getDataBySlug(pageSlug);
    }, []);


    if (breakpoint === 'sm')
        return <MobView state={state} setState={setState} history={history}/>
    return <WebView state={state} setState={setState} history={history}/>
}

export default AboutPage;


const WebView = ({state, setState, history}) => {
    const [emailTooltipText, setEmailTooltipText] = useState('Click to copy');

    return (
        <div style={{position: 'relative'}}>
            <div className="goBackIcon" onClick={() => history.goBack()}>
                <GoBackIcon style={{color: '#fff', cursor: 'pointer'}}/>
            </div>

            <img src={`/assets/PNG/services/${state.data?.value}s.png`}
                 className="coverImage"
            />

            <div className="labelWrapper">
                <div className="titleWrapper">
                    <MyServiceIcon
                        name={state.data?.title?.toLowerCase()}
                        className={'service-icon'}
                        style={{width: 100, color: '#fff'}}
                    />
                    <div>
                        <div className="title">{state.data?.title}</div>
                        <div className="subTitle">{state.data?.subTitle}</div>
                    </div>
                </div>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '0px 101px 50px 101px',
                boxShadow: '0px 2px 30px rgba(0, 0, 0, 0.15)',
                borderRadius: '0 0 20px 20px',
                fontSize: 16,
                lineHeight: 1.4,
            }}>
                <div style={{color: '#003168', padding: '40px 50px 30px 50px',}}>
                    {state.data?.description}
                </div>
                <div className="note">{state.data?.note}</div>
            </div>

            <img src={`/assets/PNG/services/${state.data?.value}s.png`}
                 style={{
                     position: 'absolute',
                     maxHeight: 600,
                     bottom: 0,
                     borderRadius: 20,
                     objectFit: 'cover',
                 }}
            />

            <div className="input_wrapper" style={{justifyContent: 'space-between'}}>
                <div className="prices_text_wrapper">
                    <div className="prices_text">{`Average price for ${state.data?.title?.toLowerCase()} repair without parts`}</div>
                    <div className="prices">{`$ ${state.data?.price}`}</div>
                </div>

                <div style={{
                    padding: 30,
                    paddingTop: 0,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                }}>
                    <div style={{
                        fontSize: "1.5rem",
                        lineHeight: 1.1,
                        marginTop: 70,
                        marginBottom: 20,
                        fontWeight: 500,
                        textAlign: "end",
                        color: '#8B9CB6'
                    }}>
                        Submit a Service Request
                    </div>

                    <div style={{marginBottom: 20}}>
                        <MyInput label={'Full name'}
                                 value={state.dataToSend?.name}
                                 onChange={(e) => setState({
                                     ...state,
                                     dataToSend: {...state.dataToSend, name: e.target.value}
                                 })}
                        />
                    </div>
                    <div style={{marginBottom: 20}}>
                        <MyInput label={'Phone (xxx) xxx-xxxx'}
                                 value={state.dataToSend?.phone}
                                 onChange={(e) => setState({
                                     ...state,
                                     dataToSend: {...state.dataToSend, phone: e.target.value}
                                 })}
                        />
                    </div>
                    <div style={{marginBottom: 20}}>
                        <MyInput label={'Address'}
                                 value={state.dataToSend?.address}
                                 onChange={(e) => setState({
                                     ...state,
                                     dataToSend: {...state.dataToSend, address: e.target.value}
                                 })}
                        />
                    </div>

                    <div style={{marginBottom: 40}}>
                        <MyInput label={'Message'}
                                 multiline
                                 value={state.dataToSend?.message}
                                 onChange={(e) => setState({
                                     ...state,
                                     dataToSend: {...state.dataToSend, message: e.target.value}
                                 })}
                        />
                    </div>

                    <Button variant="contained"
                            color="primary"
                            disabled={!state.dataToSend.address && !state.dataToSend.phone}
                            style={{minWidth: 400, minHeight: 50}}
                            onClick={() => sendDataToClient(state, setState)}
                    >
                        Send
                    </Button>
                </div>
            </div>

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
                    <div style={{fontSize: 18, color: '#fff'}}>info@ultrafixappliance.com</div>
                </div>
            </Tooltip>
        </div>
    );
}


const MobView = ({state, setState, history}) => {
    const [emailTooltipText, setEmailTooltipText] = useState('Click to copy');

    return (
        <div style={{position: 'relative'}}>
            <div className="goBackIcon" onClick={() => history.goBack()}>
                <GoBackIcon style={{color: '#fff', cursor: 'pointer'}}/>
            </div>

            <img src={`/assets/PNG/services/${state.data?.value}s.png`}
                 className="coverImage"
                 style={{marginTop: 60}}
            />

            <div className="description">
                <div className="titleWrapper" style={{borderRadius: 0}}>
                    <MyServiceIcon
                        name={state.data?.title?.toLowerCase()}
                        className={'service-icon'}
                        style={{width: 40, color: 'rgba(0, 59, 100, 0.3)'}}
                    />
                    <div>
                        <div className="title" style={{color: 'rgba(0, 59, 100, 0.4)'}}>{state.data?.title}</div>
                        <div className="subTitle" style={{color: 'rgba(0, 59, 100, 0.4)'}}>{state.data?.subTitle}</div>
                    </div>
                </div>

                <div style={{display: 'flex', paddingBottom: 20}}>
                    {state.data?.description}
                </div>
                <div className="note">{state.data?.note}</div>
            </div>

            <img src={`/assets/PNG/services/${state.data?.value}s.png`}
                 style={{
                     position: 'absolute',
                     width: '100%',
                     height: 700,
                     bottom: 0,
                     borderRadius: 20,
                     objectFit: 'cover',
                 }}
            />

            <div className="input_wrapper" style={{justifyContent: 'space-between'}}>
                <div className="prices_text_wrapper">
                    <div className="prices_text">{`Average price for ${state.data?.title?.toLowerCase()} repair without parts`}</div>
                    <div className="prices">{`$ ${state.data?.price}`}</div>
                </div>

                <div style={{
                    marginTop: 10,
                    marginBottom: 30,
                    padding: 30,
                    paddingTop: 0,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    width: '100%',
                }}>
                    <div style={{
                        fontSize: "1.1rem",
                        lineHeight: 1,
                        marginTop: 30,
                        marginBottom: 20,
                        fontWeight: 500,
                        textAlign: "start",
                        color: '#8B9CB6'
                    }}>
                        Submit a Service Request
                    </div>

                    <div style={{marginBottom: 20}}>
                        <MyInput label={'Full name'}
                                 value={state.dataToSend?.name}
                                 onChange={(e) => setState({
                                     ...state,
                                     dataToSend: {...state.dataToSend, name: e.target.value}
                                 })}
                                 style={{borderColor: '#fff'}}
                        />
                    </div>
                    <div style={{marginBottom: 20}}>
                        <MyInput label={'Phone (xxx) xxx-xxxx'}
                                 value={state.dataToSend?.phone}
                                 onChange={(e) => setState({
                                     ...state,
                                     dataToSend: {...state.dataToSend, phone: e.target.value}
                                 })}
                        />
                    </div>
                    <div style={{marginBottom: 20}}>
                        <MyInput label={'Address'}
                                 value={state.dataToSend?.address}
                                 onChange={(e) => setState({
                                     ...state,
                                     dataToSend: {...state.dataToSend, address: e.target.value}
                                 })}
                        />
                    </div>

                    <div style={{marginBottom: 40}}>
                        <MyInput label={'Message'}
                                 multiline
                                 value={state.dataToSend?.message}
                                 onChange={(e) => setState({
                                     ...state,
                                     dataToSend: {...state.dataToSend, message: e.target.value}
                                 })}
                        />
                    </div>

                    <Button variant="contained"
                            color="primary"
                            disabled={!state.dataToSend.address && !state.dataToSend.phone}
                            style={{width: '100%', height: 50}}
                            onClick={() => sendDataToClient(state, setState)}
                    >
                        Send
                    </Button>
                </div>
            </div>

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
                    <div style={{fontSize: 18, color: '#fff'}}>info@ultrafixappliance.com</div>
                </div>
            </Tooltip>
        </div>
    );
}
