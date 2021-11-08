import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Gallery from './Gallery';
import { useParams } from 'react-router';
import { Typography } from '@mui/material';
import style from '../../styles/App.css';
import { TribeDescription, TribeGallery } from '../data/Tribedata';


const TribeDetailView = () => {

    let { tribe } = useParams();
    var aboutTribe = TribeDescription().find(description => description.tribeName === tribe)

    var tribeImages = TribeGallery().find(gallery => gallery.name === tribe)



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
            <Accordion className="tribeTitle" style={style} >
                <AccordionDetails className="tribeTitle" style={style} xs="auto" >
                    <Gallery images={tribeImages.images} />
                </AccordionDetails>
            </Accordion>
            <Accordion headerstyle={{ height: "50px", width: "100px" }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    ABOUT {tribe.toUpperCase()}
                </AccordionSummary>
                <AccordionDetails>
                    {aboutTribe.content.split("\n").map((line) => <Typography variant="body2" >{line}</Typography>)}
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default TribeDetailView
