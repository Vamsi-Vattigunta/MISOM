import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useTheme } from '@material-ui/core/styles';
import ResearchView from '../views/Research';
import BooksView from '../views/Books';
import ArticleView from '../views/Article';
import AboutMeView from '../views/AboutMe';
import TribeView from '../views/Tribes';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import TribeDetailView from '../views/TribeDetailView';
import MapsView from '../views/Maps';
import NavigationDrawer from './navigationDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import ThemeSwitch from '../controls/ThemeSwitch';
import { makeStyles } from '@material-ui/core/styles';
import ScrollToTop from '../views/ScrollToTop';



function Navigation({ themeToggler }) {
    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: 200,
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
            width: 200
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

    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [tab, setTab] = React.useState("");

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    };

    return (
        <Router>
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
                            <NavigationDrawer setTab={setTab} />
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
                            <NavigationDrawer setTab={setTab} />
                        </Drawer>
                    </Hidden>
                </nav>
                <div className={classes.content}>
                    <div className={classes.toolbar} />
                    {tab !== '' ? <Redirect push to={tab} /> : null}
                    <ScrollToTop />
                    <Switch>
                        <Route exact={true} path="/">
                            <TribeView setTab={setTab} />
                        </Route>
                        <Route path="/Research">
                            <ResearchView />
                        </Route>
                        <Route path="/Books">
                            <BooksView />
                        </Route>
                        <Route path="/Articles">
                            <ArticleView />
                        </Route>
                        <Route path="/AboutMe">
                            <AboutMeView />
                        </Route>
                        <Route path="/Maps">
                            <MapsView />
                        </Route>
                        <Route exact path="/tribeDetail/:tribe" component={TribeDetailView} />

                    </Switch>
                </div>
            </div>
        </Router>
    );
};

Navigation.propTypes = {
    container: PropTypes.object,
};

export default Navigation;
