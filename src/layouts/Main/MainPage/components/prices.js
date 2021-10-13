import DividerLine from "../../../../components/custom/DividerLine";
import React from "react";
import {useWindowDimensions} from "../../../../hooks";


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
    {title: 'Refrigerator Repair', price: '165 - 365'},
    {title: 'Ice machine Repair', price: '165 - 345'},
    {title: 'Washer Repair', price: '145 - 265'},
    {title: 'Dryer Repair', price: '145 - 235'},
    {title: 'Dishwasher Repair', price: '145 - 185'},
    {title: 'Oven\\Double Oven', price: '185 - 315'},
    {title: 'Cooktop\\Stove Repair', price: '145 - 285'},
    {title: 'Microwave Repair', price: '145 - 185'},
    {title: 'Wine Cooler Repair', price: '165 - 265'},
    {title: 'Freezer Repair', price: '165 - 285'},
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

    const WebPriceLine = ({title, price}) => (
        <div className='text-white'
             style={{
                 borderLeft: '1px solid rgba(255,255,255, 0.25)',
                 borderTop: '1px solid rgba(255,255,255, 0.15)',
                 display: 'inline-block',
                 borderRadius: 10,
                 padding: '20px 25px',
                 marginRight: 100,
                 marginBottom: 30,
             }}
        >
            <div style={{fontSize: 20, fontWeight: 300, marginBottom: 5}}>{title}</div>
            <div style={{fontSize: 40, fontWeight: 600, lineHeight: 1}}>${price}</div>
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

                <div style={{marginBottom: 50, fontSize: 22, fontWeight: 200, color: '#fff'}}>
                    Average prices without parts:
                </div>
                {
                    prices.map((item, index) => (
                        <WebPriceLine key={index} title={item.title} price={item.price}/>
                    ))
                }
            </div>
        </div>
    );
}
