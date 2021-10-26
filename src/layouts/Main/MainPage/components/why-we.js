import ImageGallery from "react-image-gallery";
import React from "react";
import {useWindowDimensions} from "../../../../hooks";
import DividerLine from "../../../../components/custom/DividerLine";


const images = [
    {original: '/assets/JPG/ultrafix1.jpg'},
    {original: '/assets/JPG/ultrafix2.jpg'},
    {original: '/assets/JPG/ultrafix3.jpg'},
    {original: '/assets/JPG/ultrafix4.jpg'},
    {original: '/assets/JPG/ultrafix5.jpg'},
    {original: '/assets/JPG/ultrafix6.jpg'},
    {original: '/assets/JPG/ultrafix7.jpg'},
    {original: '/assets/JPG/ultrafix8.jpg'},
    {original: '/assets/JPG/ultrafix9.jpg'},
    {original: '/assets/JPG/ultrafix10.jpg'},
    {original: '/assets/JPG/ultrafix11.jpg'},
];


const images_mob = [
    {original: '/assets/JPG/ultrafix1_mob.jpg'},
    {original: '/assets/JPG/ultrafix2_mob.jpg'},
    {original: '/assets/JPG/ultrafix3_mob.jpg'},
    {original: '/assets/JPG/ultrafix4_mob.jpg'},
    {original: '/assets/JPG/ultrafix5_mob.jpg'},
    {original: '/assets/JPG/ultrafix6_mob.jpg'},
    {original: '/assets/JPG/ultrafix7_mob.jpg'},
    {original: '/assets/JPG/ultrafix8_mob.jpg'},
    {original: '/assets/JPG/ultrafix9_mob.jpg'},
    {original: '/assets/JPG/ultrafix10_mob.jpg'},
    {original: '/assets/JPG/ultrafix11_mob.jpg'},
];



export default function WhyUs(props) {
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


const MobView = (props) => {
    return(
        <div style={{backgroundColor: '#fff'}}>
            <div style={{marginLeft: 25, marginTop: 20}}>
                <div style={{fontSize: 30, fontWeight: 600, color: '#003168',}}>
                    Why Us ?
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div style={{padding: 40, fontSize: 16, textAlign: 'center', color: '#949494'}}>
                Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service.
                Our business model is built on respect, promptness, honesty, and taking pride in our work.
                When you choose us for your appliance repair, you learn how closely we hold to these values.
            </div>
            <div style={{width: "100%"}}>
                <ImageGallery items={images_mob}
                              fullscreen={true}
                              autoPlay={true}
                              showFullscreenButton={false}
                              showPlayButton={false}
                              // showBullets={true}
                              useBrowserFullscreen={true}
                              className={"my-image-gallery"}
                />
            </div>
        </div>
    );
}


const WebView = (props) => {
    return(
        <div style={{backgroundColor: '#fff'}}>
            <div style={{marginLeft: 100, marginTop: 50}}>
                <div style={{fontSize: 42, fontWeight: 500, color: '#003168',}}>
                    Why Us ?
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div style={{padding: '40px 150px', fontSize: 22, fontWeight: 300, textAlign: 'center', color: '#656565'}}>
                Client satisfaction is at the forefront of our minds at UltraFix Appliance Repair Service.
                Our business model is built on respect, promptness, honesty, and taking pride in our work.
                When you choose us for your appliance repair, you learn how closely we hold to these values.
            </div>
            <div style={{width: "100%"}}>
                <ImageGallery items={images}
                              fullscreen={true}
                              autoPlay={true}
                              showFullscreenButton={false}
                              showPlayButton={false}
                              // showBullets={true}
                              useBrowserFullscreen={true}
                              className={"my-image-gallery"}
                />
            </div>
        </div>
    );
}
