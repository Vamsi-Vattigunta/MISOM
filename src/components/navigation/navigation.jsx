import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ThemeSwitch from '../controls/ThemeSwitch'
import ResearchView from '../views/Research';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BooksView from '../views/Books';
import ArticleView from '../views/Article';
import AboutMeView from '../views/AboutMe';
import TribeView from '../views/Tribes';

const drawerWidth = 200;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
}));


function ResponsiveDrawer({ themeToggler }) {
    const menuItems = ['TRIBES', 'MAPS', 'VIDEOS', 'PUBLICATIONS', 'ABOUT ME', 'CONTACT']
    const nestedItems = ['PUBLICATIONS']
    const subMenu = {
        PUBLICATIONS: [
            'BOOKS', 'ARTICLES'
        ]
    }
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [content, updateContent] = React.useState(<TribeView />);
    const [open, setOpen] = React.useState(false);
    const [selectedTab, setSelectedTab] = React.useState("TRIBES");


    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }

    const pathNav = (text) => {
        setSelectedTab(text)
        if (text === 'VIDEOS') {
            updateContent(<ResearchView />)
        }
        else if (text === 'TRIBES') {
            updateContent(<TribeView />)
        }
        else if (text === 'PUBLICATIONS') {
            setOpen(!open);
        }
        else if (text === 'BOOKS') {
            updateContent(<BooksView />)
        }
        else if (text === 'ARTICLES') {
            updateContent(<ArticleView />)
        }
        else if (text === 'ABOUT ME') {
            updateContent(<AboutMeView />)
        }
    }

    const drawer = (
        <div>
            <List sx={{ width: '100%', maxWidth: 360 }} component="nav"
                aria-labelledby="nested-list-subheader">
                {menuItems.map((text, index) => {
                    if (!nestedItems.includes(text)) {
                        return (<ListItemButton selected={selectedTab === text} key={text} onClick={(event) => pathNav(text)}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                        )
                    } else {
                        const subMenuArray = subMenu[text]
                        return (<>
                            <ListItemButton selected={selectedTab === text} key={text} onClick={(event) => pathNav(text)}>
                                <ListItemText primary={text} />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            {subMenuArray.map((text, index) => {
                                return (
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton selected={selectedTab === text} key={text} onClick={(event) => pathNav(text)} sx={{ pl: 4 }}>
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




    return (

        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap>
                        Man In Search Of Man
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <ThemeSwitch themeToggler={themeToggler} />
                </Toolbar>
            </AppBar>

            <nav className={classes.drawer}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer color="default"
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                            <CloseIcon />
                        </IconButton>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <div className={classes.content}>
                <div className={classes.toolbar} />
                {content}

            </div>
        </div>

    );
}
ResponsiveDrawer.propTypes = {
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
};
export default ResponsiveDrawer;