import React from 'react';
import {Map, Marker, ZoomControl} from "pigeon-maps";
import {useWindowDimensions} from "../../../hooks";


const ContactsPage = () => {
    const {breakpoint} = useWindowDimensions();

    if (breakpoint === "sm") {
        return (
            <div style={{height: "85vh", width: "100%", paddingTop: 90, backgroundColor: "#fff"}}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "85vh",
                    paddingBottom: 90,
                    width: "100%",
                }}>
                    <div style={{
                        display: "flex",
                        padding: "20px 30px",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        width: 400
                    }}>
                        <div style={{fontSize: 26, color: "#2f2f2f"}}>(832) 998-0886</div>
                        <div style={{fontSize: 18, marginBottom: 30, color: "#00A2FF"}}>info@ultrafixappliance.com</div>

                        <div style={{fontSize: 20, color: "#2f2f2f"}}>2742 Jeanetta St #722</div>
                        <div>Houston, TX 77063, USA</div>
                    </div>
                    <Map defaultCenter={[29.7356988, -95.5281589]} defaultZoom={17}>
                        <ZoomControl/>
                        <Marker width={50} anchor={[29.7356988, -95.5281589]}/>
                    </Map>
                </div>
            </div>
        );
    } else {
        return (
            <div style={{height: "85vh", width: "100%", paddingTop: 90,}}>
                <div style={{
                    display: "flex",
                    height: "85vh",
                    paddingBottom: 90,
                    width: "100%",
                    backgroundColor: "#fff"
                }}>
                    <div style={{
                        display: "flex",
                        padding: "20px 30px",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        width: 400
                    }}>
                        <div style={{fontSize: 26, color: "#2f2f2f"}}>(832) 998-0886</div>
                        <div style={{fontSize: 18, marginBottom: 30, color: "#00A2FF"}}>info@ultrafixappliance.com</div>

                        <div style={{fontSize: 20, color: "#2f2f2f"}}>2742 Jeanetta St #722</div>
                        <div>Houston, TX 77063, USA</div>
                    </div>
                    <Map defaultCenter={[29.7356988, -95.5281589]} defaultZoom={17}>
                        <ZoomControl/>
                        <Marker width={50} anchor={[29.7356988, -95.5281589]}/>
                    </Map>
                </div>
            </div>
        );
    }
}

export default ContactsPage;
