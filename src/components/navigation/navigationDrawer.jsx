import React from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { menuItems, nestedItems, subMenu } from '../data/NavigationData';
import { navigate } from './navigationUtil';

const NavigationDrawer = ({ setTab }) => {
    const [open, setOpen] = React.useState(false);
    
    return (
        <div>
        <List sx={{ width: '100%', maxWidth: 360 }} component="nav"
            aria-labelledby="nested-list-subheader">
            {menuItems.map((text) => {
                if (!nestedItems.includes(text)) {
                    return (<ListItemButton onClick={(event) => navigate(text, setTab, setOpen, open)}>
                        <ListItemText primary={text} />
                    </ListItemButton>
                    )
                } else {
                    const subMenuArray = subMenu[text]
                    return (
                        <>
                            <ListItemButton key={text} onClick={(event) => navigate(text, setTab, setOpen, open)}>
                                <ListItemText primary={text} />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            {subMenuArray.map((text) => {
                                return (
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton key={text} onClick={(event) => navigate(text, setTab, setOpen, open)} sx={{ pl: 4 }}>
                                                <ListItemText primary={text} />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                )
                            })}
                        </>
                    )
                }
            })}
        </List>
    </div>
    );
};

export default NavigationDrawer;