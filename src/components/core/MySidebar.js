import React, {useContext} from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import {AuthContext} from "../../context/AuthContext";
import DehazeIcon from '@material-ui/icons/Dehaze';
import '../../assets/_sidebar.css';


const useStyles = makeStyles((theme) =>({
    list: {
        width: 250,
        height: '100%',
        backgroundColor: '#fff',
        backdropFilter: 'blur(20px)',
    },
    fullList: {
        width: 'auto',
    },
    link: {
        textDecoration: 'none !important' ,
        color: '#000',
    },
    textItemFontSize: {
        color: '#7c91a7',
        fontSize: '1.4rem',
        fontWeight: 500,
        marginTop: 10,
        marginLeft: 15,
        '&:hover': {
            color: '#003168'
        }
    }
}));


export default function MySidebar(props) {
    let {pageRoutes} = props;
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    let history = useHistory();
    let location = useLocation();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/adminPanel')
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {
                    pageRoutes.map((page, index) =>
                        <a href={page.route} className={classes.link} style={{textDecoration: "none"}}>
                            <ListItem button>
                                <ListItemText classes={{secondary: classes.textItemFontSize}} secondary={page.label} />
                            </ListItem>
                        </a>
                    )
                }
            </List>
        </div>
    );


    return (
        <div>
            <React.Fragment>
                <div className="mob_header">
                    <Link to={'/main'}>
                        <img src={`/assets/SVG/Ultrafix-logo.svg`} style={{width: 150}}/>
                    </Link>

                    <Button onClick={toggleDrawer('left', true)}>
                        <DehazeIcon style={{color: '#003168'}}/>
                    </Button>
                </div>

                <Drawer anchor={'left'} open={state.left} onClose={toggleDrawer('left', false)}>
                    <div style={{height: 150, backgroundColor: '#fff'}}>
                        <img src={`/assets/SVG/Ultrafix-logo.svg`} className="img_" style={{width: 170, margin: '40px'}}/>
                    </div>
                    <div className="px-2 pt-1">
                        <div className="line__sidebar"/>
                    </div>
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
