import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { TribeStates } from '../data/Tribedata';
import style from '../../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TribeStateView from './TribeStateView';



const TribeMainView = ({ setTab }) => {

    const [tribeStateImages, setTribeStateImages] = React.useState(TribeStates()[0]);

    const tribeStateView = (stateName) => {
        setTribeStateImages(TribeStates().find(name => name.name === stateName));
    }

    const [state, setState] = React.useState('');

    const handleChange = (event) => {
        setState(event.target.value);
    };

    //const [expanded, setExpanded] = React.useState(0);
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
                        Particular vulnarable tribes groups in india
                    </AccordionSummary>
                </Accordion>
                <FormControl sx={{ minWidth: 650 }} className="statesDropdown">
                    <InputLabel id="demo-simple-select-label">List of tribes with respect to states</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state}
                        label="List of tribes with respect to states"
                        onChange={handleChange}
                    >
                        {TribeStates().map((state, index) => {
                            return (
                                <MenuItem value={index} onClick={() => { tribeStateView(state.name) }} >
                                    <Typography >{state.name}</Typography>
                                </MenuItem>
                            )
                        })}
                    </Select>

                </FormControl>

                {/* <Accordion expanded className="galleryTitle" style={style}>
                    <AccordionDetails >
                        <Grid container spacing={3} flex-direction="column" justifyContent="center" >
                            {TribeGallery().map((tribe) => {
                                return tribe.images.map((image, index) => {
                                    return (
                                        <Grid item xs="auto" md={3} onClick={() => handleOpen(index)}>
                                            <Card sx={{ maxWidth: 300 }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="140"
                                                        image={image.url}
                                                        alt="green iguana"
                                                    />
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    )
                                }
                                )
                            })}
                        </Grid>

                    </AccordionDetails>
                </Accordion> */}
                {/* <div className="tribeStateView" style={style}>
                    {TribeStates().map((state, index) => {
                        return (
                            <Accordion expanded>
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx="auto"
                                >
                                    {state.name}
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={3} flex-direction="column" justifyContent="center"  >
                                        {state.tribes.map((image, index) => {
                                            return (
                                                <Grid item xs="auto" md={3} onClick={() => { tribeData(image.name) }}>
                                                    <Card sx={{ maxWidth: 300 }}>
                                                        <CardActionArea>
                                                            <CardMedia
                                                                component="img"
                                                                height="140"
                                                                image={image.image}
                                                                alt="green iguana"
                                                            />
                                                            <CardContent >
                                                                <Typography gutterBottom variant="h7" component="div">
                                                                    {image.name}
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
                </div> */}
                <div className="tribeStateView" style={style} >
                    <Accordion expanded  >
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx="auto"
                        >
                            {tribeStateImages.name}
                        </AccordionSummary>
                        <AccordionDetails >
                            <TribeStateView tribeData={tribeStateImages.tribes} setTab={setTab} />
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </Router>
    );
}

export default TribeMainView