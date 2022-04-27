import ImageGallery from "react-image-gallery";
import React from "react";
import {useWindowDimensions} from "../../../../hooks";
import DividerLine from "../../../../components/custom/DividerLine";


const images = [
    {original: '/assets/JPG/appliances1.jpg'},
    {original: '/assets/JPG/appliances2.jpg'},
    {original: '/assets/JPG/appliances3.jpg'},
    {original: '/assets/JPG/appliances4.jpg'},
];

const images_mob = [
    {original: '/assets/JPG/appliances1_mob.jpg'},
    {original: '/assets/JPG/appliances2_mob.jpg'},
    {original: '/assets/JPG/appliances3_mob.jpg'},
    {original: '/assets/JPG/appliances4_mob.jpg'},
];


export default function AboutUs(props) {
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
                <div style={{
                    fontSize: 30,
                    fontWeight: 600,
                    color: '#003168',
                }}>
                    About Us
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div style={{padding: 40, fontSize: 16, textAlign: 'center', color: '#949494'}}>
                Our pledge is to establish lasting relationships with our customers by exceeding their expectations and
                gaining their trust through exceptional performance by each member of our service team. We have been
                providing top service! See just how our UltraFix Appliance Repair Service
                can better your life today!
            </div>
            <div style={{width: "100%"}}>
                <ImageGallery items={images_mob}
                              fullscreen={true}
                              autoPlay={true}
                              showFullscreenButton={false}
                              showPlayButton={false}
                              showBullets={true}
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
                <div style={{
                    fontSize: 42,
                    fontWeight: 500,
                    color: '#003168',
                }}>
                    About Us
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div style={{padding: '40px 150px', fontSize: 22, fontWeight: 300, textAlign: 'center', color: '#656565'}}>
                Our pledge is to establish lasting relationships with our customers by exceeding their expectations and
                gaining their trust through exceptional performance by each member of our service team. We have been
                providing top service! See just how our UltraFix Appliance Repair Service
                can better your life today!
            </div>
            <div style={{width: "100%"}}>
                <ImageGallery items={images}
                              fullscreen={true}
                              autoPlay={true}
                              showFullscreenButton={false}
                              showPlayButton={false}
                              showBullets={true}
                              className={"my-image-gallery"}
                />
            </div>
        </div>
    );
}
