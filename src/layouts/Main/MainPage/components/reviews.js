import ImageGallery from "react-image-gallery";
import React from "react";
import {useWindowDimensions} from "../../../../hooks";
import DividerLine from "../../../../components/custom/DividerLine";
import {Col, Row} from "react-bootstrap";
import {Image} from "@material-ui/icons";



export default function Reviews(props) {
    const {breakpoint} = useWindowDimensions();

    return(
        <>
            {
                breakpoint === "sm"
                    ? <MobView {...props} />
                    : <WebView {...props} />
            }
        </>
    );
}


const MobView = () => {
    return(
        <div style={{backgroundColor: '#fff'}}>
            <div style={{marginLeft: 25, marginTop: 20}}>
                <div style={{
                    fontSize: 30,
                    fontWeight: 600,
                    color: '#003168',
                }}>
                    Reviews
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div style={{width: '100%', padding: 10, backgroundColor: '#fff'}}>
                <img src={'/assets/PNG/reviews_mob.png'} style={{height: '100%', width: '100%', marginBottom: 30, marginTop: 20}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 40}}>
                <a style={{backgroundColor: '#00ABF4', color: '#fff', fontSize: 20, fontWeight: '500', textDecoration: 'none', padding: '10px 30px', borderRadius: 5}}
                   href={'https://www.google.com/search?q=ultrafix+appliance&rlz=1C5CHFA_enAZ963AZ963&oq=ultrafix+appliance&aqs=chrome..69i57j46i175i199i512j0i512l2j69i60l3.3265j0j7&sourceid=chrome&ie=UTF-8#lrd=0x8640c33ffbd59fcd:0x86ed469b52b0e240,1,,,'}
                >
                    Show More
                </a>
            </div>
        </div>
    );
}


const WebView = () => {
    return(
        <div style={{width: '100%', backgroundColor: '#fff'}}>
            <div style={{marginLeft: 100, marginTop: 50}}>
                <div style={{
                    fontSize: 42,
                    fontWeight: 500,
                    color: '#003168',
                }}>
                    Reviews
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div style={{width: '100%', padding: 80, backgroundColor: '#fff'}}>
                <img src={'/assets/PNG/reviews.png'} style={{height: '100%', width: '100%'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <a style={{backgroundColor: '#00ABF4', color: '#fff', fontSize: 20, fontWeight: '500', textDecoration: 'none', padding: '10px 30px', borderRadius: 5}}
                    href={'https://www.google.com/search?q=ultrafix+appliance&rlz=1C5CHFA_enAZ963AZ963&oq=ultrafix+appliance&aqs=chrome..69i57j46i175i199i512j0i512l2j69i60l3.3265j0j7&sourceid=chrome&ie=UTF-8#lrd=0x8640c33ffbd59fcd:0x86ed469b52b0e240,1,,,'}
                >
                    Show More
                </a>
            </div>
        </div>
    );
}
