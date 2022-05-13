import React, {useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link, useHistory} from "react-router-dom";


const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#2583F0',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);


const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#7c91a7',
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.pxToRem(18),
        '&:hover': {
            opacity: 1,
            color: '#003168'
        },
        '&:focus': {
            opacity: 1,
            color: '#003168'
        },
    },
}))((props) => <Tab disableRipple {...props} />);


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: "100%",
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(20px)',
    },
    padding: {
        padding: theme.spacing(1),
    },
    demo1: {
        backgroundColor: theme.palette.background.paper,
    },
    demo2: {
        marginTop: 10,
        paddingBottom: 15,
        paddingTop: 15,
    },
}));


export default function MyNavbar(props) {
    let {pageRoutes} = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        for (let index in pageRoutes) {
            if (pageRoutes[index].route === history.location.hash) {
                setValue(parseInt(index));
            }
        }
    }, [history.location.hash]);



    return (
        <div className={classes.root}>
            <div className={classes.demo2}>
                <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example right">
                    {
                        pageRoutes.map((page, index) =>
                            <a href={page.route} style={{textDecoration: "none"}}>
                                <StyledTab key={index} label={page.label} />
                            </a>
                        )
                    }
                </StyledTabs>
            </div>
        </div>
    );
}
