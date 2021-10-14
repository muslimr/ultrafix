import ImageGallery from "react-image-gallery";
import React from "react";
import {useWindowDimensions} from "../../../../hooks";
import DividerLine from "../../../../components/custom/DividerLine";
import DateLib from "../../../../plugins/DateLib";
import {Image} from "@material-ui/icons";


const employees = [
    {image: '/assets/PNG/employee1.png', name: 'Aydin'},
    {image: '/assets/PNG/employee2.png', name: 'Orkhan'},
    {image: '/assets/PNG/employee3.png', name: 'Mack'},
];


export default function Employees(props) {
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
                    Best Employees of the {DateLib.date('M')}
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div style={{padding: 40, fontSize: 16, textAlign: 'center', color: '#949494'}}>
                Our pledge is to establish lasting relationships with our customers by exceeding their expectations and
                gaining their trust through exceptional performance by each member of our service team. We have been
                providing top service! See just how our UltraFix Appliance Repair Service
                in Houston can better your life today!
            </div>
        </div>
    );
}


const WebView = (props) => {
    const Employee = ({image, name}) => (
        <div className='d-flex flex-column align-items-center'>
            <img src={image} style={{width: 300, height: 300}}/>
            <div style={{fontSize: 26, marginTop: 20, color: '#84A3C7'}}>{name}</div>
        </div>
    )


    return(
        <div className='w-100' style={{backgroundColor: '#fff'}}>
            <div style={{marginLeft: 100, marginTop: 50}}>
                <div style={{
                    fontSize: 42,
                    fontWeight: 500,
                    color: '#003168',
                }}>
                    The Best Employees of {DateLib.date('F')}
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div className='d-flex justify-content-evenly' style={{padding: '80px 0'}}>
                {
                    employees.map((employee, index) =>
                        <Employee key={index} image={employee.image} name={employee.name}/>
                    )
                }
            </div>
        </div>
    );
}
