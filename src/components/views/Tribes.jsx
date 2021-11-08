import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import Grid from '@mui/material/Grid';
import { TribeStates } from '../data/Tribedata';
import style from '../../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom'




const TribeMainView = ({ setTab }) => {

    const tribeData = (name) => {
        setTab('/tribeDetail/' + name);
    }

    const [expanded, setExpanded] = React.useState(0);
    return (
        <Router>
            <div >
                <Accordion className="tribeTitle" style={style}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        aria-expanded="true"
                        sx="auto"

                    >
                        List of Tribes with respect to their states
                    </AccordionSummary>
                </Accordion>
                {TribeStates().map((state, index) => {
                    return (

                        <Accordion expanded={expanded === index} onChange={(event) => setExpanded(index === expanded ? -1 : index)}>

                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx="auto"
                            >
                                {state.name}
                            </AccordionSummary>

                            <AccordionDetails className="tribesClass">
                                <Grid container spacing={3} flex-direction="column" justifyContent="center" >
                                    {state.tribes.map((tribe) => {
                                        return (

                                            <Grid item xs="auto" md={3} onClick={(event) => tribeData(tribe.name)}>
                                                <Card sx={{ maxWidth: 300 }}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            height="140"
                                                            image={tribe.image}
                                                            alt="green iguana"
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h7" component="div">
                                                                {tribe.name}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">

                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                        )
                                    })}
                                </Grid>

                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </div>
        </Router>
    );
}

export default TribeMainView