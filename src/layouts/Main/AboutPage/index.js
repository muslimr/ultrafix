import React, {useState} from 'react';
import './styles/index.scss';
import MyInput from "../../../components/custom/MyInput";
import {Tooltip} from "antd";


const AboutPage = ({type = ''}) => {
    const [emailTooltipText, setEmailTooltipText] = useState('Click to copy');

    return(
        <div style={{height: '100vh'}}>
            <div style={{padding: 100}}>{type}</div>
            <div className="input_wrapper">
                <div className="prices_text_wrapper">
                    <div className="prices_text">Average Price without parts</div>
                    <div className="prices">$ 165 - 365</div>
                </div>

                <div className="input_box">
                    <MyInput
                        label={'Phone (xxx) xxx-xxxx'}
                        // containerStyle={{minWidth: 400}}
                        className="input"
                        value={''}
                        onChange={(e) => {}}
                    />
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
