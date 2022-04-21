import React, {useReducer, useState} from 'react';
import './styles/index.scss';
import MyInput from "../../../components/custom/MyInput";
import {Tooltip} from "antd";
import {Button} from "@material-ui/core";
import {sendDataToClient} from "../../../actions/nodemail";


const AboutPage = ({type = ''}) => {

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

    const [emailTooltipText, setEmailTooltipText] = useState('Click to copy');

    return(
        <div style={{position: 'relative'}}>
            <img src={`/assets/PNG/services/refrigerators.png`}
                 style={{width: '100%', bottom: 0}}
            />

            <div style={{
                position: 'absolute',
                top: 700,
                background: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(50px)',
                /* Note: backdrop-filter has minimal browser support */
                borderRadius: 30,
            }}>
                <div style={{width : '100%'}}>
                    <div>
                        Refrigerators
                    </div>
                    <div>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    </div>
                </div>
            </div>

            <div style={{display: 'flex'}}>
                <div style={{color: '#003168', fontSize: 16, lineHeight: 1.4, margin: 45}}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                    Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                    undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                    Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
                    sit amet..", comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
                    exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                    Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                    undoubtable source.
                </div>
            </div>
            <div className="input_wrapper" style={{justifyContent: 'space-between'}}>
                <div className="prices_text_wrapper">
                    <div className="prices_text">Average Price without parts</div>
                    <div className="prices">$ 165 - 365</div>
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

export default AboutPage;
