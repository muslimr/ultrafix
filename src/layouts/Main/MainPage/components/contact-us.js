import MyInput from "../../../../components/custom/MyInput";
import {Button} from "@material-ui/core";
import React, {useReducer} from "react";
import {useWindowDimensions} from "../../../../hooks";
import {sendDataToClient} from "../../../../actions/nodemail";
import DividerLine from "../../../../components/custom/DividerLine";


export default function ContactUs (props) {
    const {breakpoint} = useWindowDimensions();

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
                address: "",
                message: "",
            },
            listData: [],
            count: 0,
            data: [],
            goToSlide: 0,
            offsetRadius: 1,
            // config: config.gentle
        }
    );


    return(
        <>
            {
                breakpoint === "sm"
                    ? <MobView {...props} state={state} setState={setState} />
                    : <WebView {...props} state={state} setState={setState} />
            }
        </>
    );
}



const MobView = (props) => {
    let {state, setState} = props;

    return(
        <div className='d-flex flex-column align-items-center justify-content-between'
             style={{
                 position: 'relative',
                 width: '100%',
                 minHeight: 200,
                 backgroundColor: '#EFF2F4',
             }}
        >
            <div style={{width: '100%', marginLeft: 50, marginTop: 30, marginBottom: 10}}>
                <div style={{
                    fontSize: 30,
                    fontWeight: 600,
                    color: '#003168',
                    width: '100%',
                }}>
                    Contact Us
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div style={{color: "#003168", margin: 30}}>
                <div className="d-flex justify-content-end mb-4">
                    <img src={`/assets/SVG/5stars.svg`} style={{width: 200, marginTop: 10}} />
                </div>

                <div style={{fontSize: "2.6rem", lineHeight: 1.2, fontWeight: 600, textAlign: "end"}}>
                    THE BEST RATED
                </div>
                <div style={{fontSize: "1.5rem", lineHeight: 1.1, marginTop: 10, fontWeight: 500, textAlign: "end", color: '#8B9CB6'}}>
                    Appliance Repair Specialists in Your Neighborhood
                </div>
                <div style={{fontSize: "1.5rem", lineHeight: 1.1, marginTop: 40, fontWeight: 500, textAlign: "end", color: '#8B9CB6'}}>
                    Call Us Now
                </div>
                <div style={{fontSize: "2rem", textAlign: "end", marginBottom: 30,}}>
                    {/*<img src={`/assets/SVG/calling-phone.svg`} style={{width: 35, marginRight: 15, marginBottom: 10}}/>*/}
                    (888) 998-6263
                </div>
            </div>
            <div style={{
                width: '90%',
                padding: 15,
                backgroundColor: "#fff",
                borderRadius: 10,
                boxShadow: '0px 2px 30px rgba(0, 0, 0, 0.15)',
                margin: 10,
                marginBottom: 30,
            }}>
                <div style={{fontSize: "1.5rem", lineHeight: 1.1, marginTop: 70, marginBottom: 20, fontWeight: 500, textAlign: "end", color: '#8B9CB6'}}>
                    Submit a Service Request
                </div>
                <div style={{marginBottom: 20}}>
                    <MyInput label={'Full name'}
                             // containerStyle={{minWidth: 400}}
                        value={state.dataToSend.name}
                        onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, name: e.target.value}})}
                    />
                </div>
                <div style={{marginBottom: 20}}>
                    <MyInput label={'Phone (xxx) xxx-xxxx'}
                        // containerStyle={{minWidth: 400}}
                        value={state.dataToSend.phone}
                        onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, phone: e.target.value}})}
                    />
                </div>
                <div style={{marginBottom: 20}}>
                    <MyInput label={'Address'}
                             // containerStyle={{minWidth: 400}}
                        value={state.dataToSend.address}
                        onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, address: e.target.value}})}
                    />
                </div>

                <div style={{marginBottom: 20}}>
                    <MyInput label={'Message'}
                             multiline
                        // containerStyle={{minWidth: 400}}
                             value={state.dataToSend.message}
                             onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, message: e.target.value}})}
                    />
                </div>

                <Button variant="contained"
                        color="primary"
                        disabled={state.loading}
                        style={{width: "100%", minHeight: 50}}
                        onClick={() => sendDataToClient(state, setState)}
                >
                    Send
                </Button>
            </div>
        </div>
    );
}




const WebView = (props) => {
    let {state, setState} = props;

    return(
        <div className='d-flex align-items-center justify-content-center'
             style={{
                 flexDirection: 'column',
                 position: 'relative',
                 width: '100%',
                 minHeight: "90vh",
                 backgroundColor: '#EFF2F4',
             }}
        >
            <div style={{width: '100%', paddingLeft: 100, marginTop: 50}}>
                <div style={{
                    fontSize: 42,
                    fontWeight: 500,
                    color: '#003168',
                    width: '100%',
                }}>
                    Contact Us
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div className='d-flex align-items-center justify-content-between'
                 style={{
                     position: 'relative',
                     width: '95%',
                     minHeight: "90vh",
                     marginTop: 50,
                     marginBottom: 50,
                     background: '#fff',
                     padding: 100,
                     borderRadius: 20,
                 }}
            >
                <div style={{color: "#003168"}}>
                    <div className="d-flex justify-content-end mb-4">
                        <img src={`/assets/SVG/5stars.svg`} style={{width: 300,}}/>
                    </div>
                    <div style={{fontSize: "5rem", lineHeight: 1.2, fontWeight: 600, textAlign: "end"}}>
                        THE BEST RATED
                    </div>
                    <div style={{fontSize: "2.3rem", fontWeight: 500, textAlign: "end", color: '#8B9CB6'}}>
                        Appliance Repair Specialists in Your Neighborhood
                    </div>
                    <div style={{fontSize: "2rem", fontWeight: 500, lineHeight: 1, textAlign: "end", color: '#8B9CB6', marginTop: 70}}>
                        Call Us Now
                    </div>
                    <div style={{fontSize: 50, textAlign: "end"}}>
                        <img src={`/assets/SVG/calling-phone.svg`} style={{width: 45, marginRight: 30, marginBottom: 10}}/>
                        (888) 998-6263
                    </div>
                </div>
                <div style={{
                    padding: 50,
                    paddingTop: 0,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                }}>
                    <div style={{fontSize: "1.5rem", lineHeight: 1.1, marginTop: 70, marginBottom: 20, fontWeight: 500, textAlign: "end", color: '#8B9CB6'}}>
                        Submit a Service Request
                    </div>

                    <div style={{marginBottom: 20}}>
                        <MyInput label={'Full name'}
                                 value={state.dataToSend.name}
                                 onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, name: e.target.value}})}
                        />
                    </div>
                    <div style={{marginBottom: 20}}>
                        <MyInput label={'Phone (xxx) xxx-xxxx'}
                                 value={state.dataToSend.phone}
                                 onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, phone: e.target.value}})}
                        />
                    </div>
                    <div style={{marginBottom: 20}}>
                        <MyInput label={'Address'}
                                 value={state.dataToSend.address}
                                 onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, address: e.target.value}})}
                        />
                    </div>

                    <div style={{marginBottom: 40}}>
                        <MyInput label={'Message'}
                                 multiline
                                 value={state.dataToSend.message}
                                 onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, message: e.target.value}})}
                        />
                    </div>

                    <Button variant="contained"
                            color="primary"
                            disabled={state.loading}
                            style={{minWidth: 400, minHeight: 50}}
                            onClick={() => sendDataToClient(state, setState)}
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}

