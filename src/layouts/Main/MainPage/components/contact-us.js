import MyInput from "../../../../components/custom/MyInput";
import {Button} from "@material-ui/core";
import React, {useReducer} from "react";
import {useWindowDimensions} from "../../../../hooks";
import {sendDataToClient} from "../../../../actions/nodemail";


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
                 marginTop: 50,
                 background: 'linear-gradient(to right, #2583F0, #0551A8)',
                 padding: 25,
             }}
        >
            <div style={{color: "#fff"}}>

                <div className="d-flex justify-content-end mb-4">
                    <img src={`/assets/SVG/5stars.svg`} style={{width: 200, marginTop: 10}} />
                </div>

                <div style={{fontSize: "2.6rem", lineHeight: 1.2, fontWeight: 600, textAlign: "end"}}>
                    THE FIRST RATED
                </div>
                <div style={{fontSize: "1.8rem", lineHeight: 1.1, marginTop: 10, fontWeight: 500, textAlign: "end"}}>
                    Houston's <b style={{color: "#fff", fontWeight: 500}}>Appliance Repair Service</b>
                </div>
                <div style={{fontSize: "1.8rem", marginTop: 30, textAlign: "end"}}>
                    <img src={`/assets/SVG/calling-phone.svg`}
                         style={{width: 35, marginRight: 15, marginBottom: 10}}
                    />
                    (832) 998-0886
                </div>
                <div style={{fontSize: "1rem", lineHeight: 1.1, marginBottom: 30, textAlign: "end",}}>
                    Call Us to schedule an appointment or schedule directly from our website.
                </div>
            </div>
            <div style={{
                width: "100%",
                padding: 25,
                backgroundColor: "#fff",
                borderRadius: 10,
                marginBottom: 10,
            }}>
                <div style={{marginBottom: 20}}>
                    <MyInput label={'Full name'}
                             // containerStyle={{minWidth: 400}}
                        value={state.dataToSend.name}
                        onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, name: e.target.value}})}
                    />
                </div>
                <div style={{marginBottom: 20}}>
                    <MyInput label={'Phone'}
                             // containerStyle={{minWidth: 400}}
                        value={state.dataToSend.phone}
                        onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, phone: e.target.value}})}
                    />
                </div>
                <div style={{marginBottom: 20}}>
                    <MyInput label={'Address'}
                             // containerStyle={{minWidth: 400}}
                        value={state.dataToSend.email}
                        onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, email: e.target.value}})}
                    />
                </div>

                <Button variant="contained"
                        color="primary"
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
        <div className='d-flex align-items-center justify-content-between'
             style={{
                 position: 'relative',
                 width: '100%',
                 minHeight: "90vh",
                 marginTop: 90,
                 background: 'linear-gradient(to right, #2583F0, #0551A8)',
                 padding: 100,
             }}
        >
            <div style={{color: "#fff"}}>

                <div className="d-flex justify-content-end mb-4">
                    <img src={`/assets/SVG/5stars.svg`}
                         style={{width: 300,}}
                    />
                </div>

                <div style={{fontSize: "5rem", lineHeight: 1.2, fontWeight: 600, textAlign: "end"}}>
                    THE FIRST RATED
                </div>
                <div style={{fontSize: "2.54rem", fontWeight: 500, textAlign: "end"}}>
                    Houston's <b style={{color: "#fff", fontWeight: 500}}>Appliance Repair Service</b>
                </div>
                <div style={{fontSize: 40, marginTop: 70, textAlign: "end"}}>
                    <img src={`/assets/SVG/calling-phone.svg`}
                         style={{width: 45, marginRight: 30, marginBottom: 10}}
                    />
                    (832) 998-0886
                </div>
                <div style={{fontSize: "1.2rem", textAlign: "end",}}>
                    Call Us to schedule an appointment or schedule directly from our website.
                </div>
            </div>
            <div style={{
                padding: 50,
                backgroundColor: "#fff",
                borderRadius: 10,
            }}>
                <div style={{marginBottom: 30}}>
                    <MyInput label={'Full name'}
                             containerStyle={{minWidth: 400}}
                        value={state.dataToSend.name}
                        onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, name: e.target.value}})}
                    />
                </div>
                <div style={{marginBottom: 30}}>
                    <MyInput label={'Phone'}
                             containerStyle={{minWidth: 400}}
                        value={state.dataToSend.phone}
                        onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, phone: e.target.value}})}
                    />
                </div>
                <div style={{marginBottom: 50}}>
                    <MyInput label={'Address'}
                             containerStyle={{minWidth: 400}}
                        value={state.dataToSend.email}
                        onChange={(e) => setState({...state, dataToSend: {...state.dataToSend, email: e.target.value}})}
                    />
                </div>

                <Button variant="contained"
                        color="primary"
                        style={{minWidth: 400, minHeight: 50}}
                        onClick={() => sendDataToClient(state, setState)}
                >
                    Send
                </Button>
            </div>
        </div>
    );
}

