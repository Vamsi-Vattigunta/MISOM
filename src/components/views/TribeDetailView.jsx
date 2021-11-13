import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Gallery from './Gallery';
import { useParams } from 'react-router';
import { Typography } from '@mui/material';
import style from '../../styles/App.css';
import getTribeData from '../data/Tribedata';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';


const TribeDetailView = () => {

    let { tribe } = useParams();

    var aboutTribe;
    var tribeImages;

    getTribeData().map((state) => {
        state.tribes.map((tribeObj) => {
            if (tribeObj.name === tribe) {
                aboutTribe = tribeObj;
                tribeImages = tribeObj.imageGallery;
            }
        })
    })

    const [expanded, setExpanded] = React.useState(true);

    return (
        <>
            <Accordion className="tribeTitle" style={style} >
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx="auto"
                >
                    <div className="tribeHeader" style={style}>
                        {tribe.toUpperCase()}
                    </div>
                </AccordionSummary>
            </Accordion >
            <Accordion expanded className="tribeTitle" style={style} >
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx="auto"
                >
                    Images
                </AccordionSummary>
                <AccordionDetails className="tribeTitle" style={style} xs="auto" >
                    { <Gallery images={tribeImages} /> }
                </AccordionDetails>
            </Accordion>
            <Accordion expanded>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx="auto"
                >
                    Videos
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
            <Accordion expanded = {expanded} onChange={(event) => setExpanded(!expanded)}>
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
