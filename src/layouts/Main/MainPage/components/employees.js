import ImageGallery from "react-image-gallery";
import React from "react";
import {useWindowDimensions} from "../../../../hooks";
import DividerLine from "../../../../components/custom/DividerLine";
import DateLib from "../../../../plugins/DateLib";
import {Image} from "@material-ui/icons";


const employees = [
    {image: '/assets/PNG/employee1.jpg', name: 'Aydin'},
    {image: '/assets/PNG/employee2.jpg', name: 'Orkhan'},
    {image: '/assets/PNG/employee3.jpg', name: 'Mack'},
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
    const Employee = ({image, name}) => (
        <div className='d-flex flex-column align-items-center'>
            <img src={image} style={{width: 93, height: 93}}/>
            <div style={{fontSize: 20, marginTop: 10, color: '#84A3C7'}}>{name}</div>
        </div>
    )


    return(
        <div className='w-100' style={{backgroundColor: '#fff'}}>
            <div style={{marginLeft: 25, marginTop: 40}}>
                <div style={{fontSize: 30, fontWeight: 600, lineHeight: 1.1, marginBottom: 10, color: '#003168',}}>
                    The Best Employees of {DateLib.date('F')}
                </div>
                <DividerLine color={'#D2D2D2'}/>
            </div>

            <div className='d-flex justify-content-evenly' style={{padding: '40px 10px'}}>
                {
                    employees.map((employee, index) =>
                        <Employee key={index} image={employee.image} name={employee.name}/>
                    )
                }
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
