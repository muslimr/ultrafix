import ImageGallery from "react-image-gallery";
import React from "react";
import {useWindowDimensions} from "../../../../hooks";
import DividerLine from "../../../../components/custom/DividerLine";


const images = [
    {original: '/assets/JPG/brands1.jpg'},
    {original: '/assets/JPG/brands2.jpg'},
    {original: '/assets/JPG/brands3.jpg'},
    {original: '/assets/JPG/brands4.jpg'},
];


const images_mob = [
    {original: '/assets/JPG/brands1_mob.jpg'},
    {original: '/assets/JPG/brands2_mob.jpg'},
    {original: '/assets/JPG/brands3_mob.jpg'},
];



export default function Brands(props) {
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
            <div style={{marginLeft: 25, marginTop: 20, marginBottom: 30}}>
                <div style={{
                    fontSize: 30,
                    fontWeight: 600,
                    color: '#003168',
                }}>
                    Brands We Repair
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div style={{width: "100%", marginTop: 20, marginBottom: 30}}>
                <ImageGallery items={images_mob}
                              fullscreen={true}
                              autoPlay={true}
                              showFullscreenButton={false}
                              showPlayButton={false}
                              showNav={false}
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
                    Brands We Repair
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div style={{width: "100%", marginTop: 50, padding: 10}}>
                <ImageGallery items={images}
                              fullscreen={true}
                              autoPlay={true}
                              showFullscreenButton={false}
                              showPlayButton={false}
                              showNav={false}
                              className={"my-image-gallery"}
                />
            </div>
        </div>
    );
}
