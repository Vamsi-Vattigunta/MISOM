import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Gallery from './Gallery';
import { useParams } from 'react-router';
import { Collapse, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import style from '../../styles/App.css';
import getTribeData from '../data/Tribedata';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const TribeDetailView = () => {

    let { tribe } = useParams();

    var aboutTribe;
    var tribeImages;
    var stateName = [];

    getTribeData().map((state) => {
        state.tribes.map((tribeObj) => {
            if (tribeObj.name === tribe) {
                aboutTribe = tribeObj;
                tribeImages = tribeObj.imageGallery;
                stateName.push(state.name);
            }
        })
    })
    const openStateList = () => {
        setOpen(!open);
      };

    const [expanded, setExpanded] = React.useState(true);
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Accordion className="tribeTitle" style={style} >
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx="auto"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Tribe Name : {tribe.toUpperCase()}
                    </Typography>
                    <Typography>
                        State :  {stateName.map((state) => state + ' ')}
                    </Typography>
                </AccordionSummary>
            </Accordion >
            {/* <List
                sx={{ width: '100%', maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={openStateList}>
                    <ListItemText>List of states {tribe} lives in </ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {stateName.map((state) => {
                    return (
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemText sx={{ pl: 4 }} primary={state} />
                            </List>
                        </Collapse>
                    )
                })}
            </List> */}
            <Accordion expanded className="tribeTitle" style={style} >
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx="auto"
                >
                    <b>Images</b>
                </AccordionSummary>
                <AccordionDetails className="tribeTitle" style={style} xs="auto" >
                    {<Gallery images={tribeImages} />}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx="auto"
                >
                    <b>Videos</b>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid className="tribeVideoGallery" container spacing={3}>
                        <Grid item xs="auto" md={3} >
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="iframe"
                                        src="https://www.youtube.com/embed/uh7TmWss1VM"
                                        frameborder="0"
                                        alt="green iguana"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded} onChange={(event) => setExpanded(!expanded)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    aria-expanded
                >
                    <div className="tribeHeader" style={style}>
                        ABOUT {tribe.toUpperCase()}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {aboutTribe.description.split("\n").map((line) => <Typography variant="body2" >{line}</Typography>)}
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default TribeDetailView
