import DividerLine from "../../../../components/custom/DividerLine";
import React from "react";
import {useWindowDimensions} from "../../../../hooks";
import {MyServiceIcon} from "../../../../components/custom/MyServiceIcon";


export default function Prices(props) {
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

let prices = [
    {title: 'Refrigerator Repair', price: '165 - 365', icon: 'refrigerator'},
    {title: 'Ice machine Repair', price: '165 - 345', icon: 'ice machine'},
    {title: 'Washer Repair', price: '145 - 265', icon: 'washer'},
    {title: 'Dryer Repair', price: '145 - 235', icon: 'dryer'},
    {title: 'Dishwasher Repair', price: '145 - 185', icon: 'dishwasher'},
    {title: 'Oven\\Double Oven', price: '185 - 315', icon: 'oven'},
    {title: 'Cooktop\\Stove Repair', price: '145 - 285', icon: 'cooktop'},
    {title: 'Microwave Repair', price: '145 - 185', icon: 'microwave'},
    {title: 'Wine Cooler Repair', price: '165 - 265', icon: 'wine cooler'},
    {title: 'Freezer Repair', price: '165 - 285', icon: 'freezer'},
];


const MobView = () => {

    return(
        <div className='d-flex flex-column w-100 pb-5'
             style={{
                 position: 'relative',
                 width: '100%',
                 minHeight: 200,
                 marginTop: 40,
                 background: 'linear-gradient(to right, #2583F0, #0551A8)',
             }}
        >
            <div style={{marginLeft: 25, marginTop: 20}}>
                <div style={{
                    fontSize: 30,
                    fontWeight: 600,
                    color: '#ffffff',
                }}>
                    Our Prices
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div>Average prices without parts:</div>
            <div>
                <div>Refrigerator Repair –</div>
                <div>$165-365</div>
            </div>
        </div>
    );
}



const WebView = () => {

    const WebPriceLine = ({title, price, icon}) => (
        <div style={{display: 'inline-block', position: 'relative', marginRight: 150,}}>
            <div className='text-white'
                 style={{
                     borderLeft: '1px solid rgba(255,255,255, 0.25)',
                     // borderBottom: '1px solid rgba(255,255,255, 0.15)',
                     // display: 'inline-block',
                     borderRadius: 15,
                     padding: '20px 25px',
                     marginBottom: 70,
                 }}
            >
                <div style={{fontSize: 20, fontWeight: 300, marginBottom: 5}}>{title}</div>
                <div style={{fontSize: 40, fontWeight: 600, lineHeight: 1}}>${price}</div>
            </div>

            <div>
                <MyServiceIcon
                    name={icon}
                    // className='position-absolute'
                    style={{right: -50, top: -20, color: 'rgba(255,255,255,0.15)', fontSize: 120, position: 'absolute'}}
                />
            </div>
        </div>
    )


    return(
        <div className='d-flex flex-column w-100 pb-5'
             style={{
                 position: 'relative',
                 width: '100%',
                 minHeight: 200,
                 marginTop: 40,
                 background: 'linear-gradient(to right, #2583F0, #0551A8)',
             }}
        >
            <div style={{marginLeft: 100, marginTop: 50}}>
                <div style={{
                    fontSize: 42,
                    fontWeight: 500,
                    color: '#ffffff',
                }}>
                    Our Prices
                </div>
                <DividerLine color={'rgba(210,210,210,0.5)'}/>

                <div style={{marginBottom: 80, fontSize: 22, fontWeight: 200, color: '#fff'}}>
                    Average prices without parts:
                </div>
                {
                    prices.map((item, index) => (
                        <WebPriceLine key={index} title={item.title} price={item.price} icon={item.icon}/>
                    ))
                }
            </div>
        </div>
    );
}
