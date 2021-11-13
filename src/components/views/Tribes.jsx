import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import getTribeData from '../data/Tribedata';
import style from '../../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TribeStateView from './TribeStateView';
import Grid from '@mui/material/Grid';
import { CardActionArea, CardContent } from '@mui/material';



const TribeMainView = ({ setTab }) => {
    const [tribeStateImages, setTribeStateImages] = React.useState(getTribeData());

    const tribeStateView = (stateName) => {
        setTribeStateImages([getTribeData().find(name => name.name === stateName)]);
    }

    const tribeDataView = (name) => {
        setTab('/tribeDetail/' + name);
    }
    const [state, setState] = React.useState('');

    const handleChange = (event) => {
        setState(event.target.value);
    };

    window.history.pushState('', null, './');
    window.onpopstate = function () {
        window.location.reload(true);
    };

    //const [expanded, setExpanded] = React.useState(0);

    return (
        <Router>
            <div >
                <Accordion className="tribeHeader" style={style}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        aria-expanded="true"
                        sx="auto"
                    >
                        PARTICULAR VILNERABLE TRIBES GROUPS IN INDIA
                    </AccordionSummary>
                </Accordion>
                <FormControl sx={{ minWidth: 350 }} className="statesDropdown">
                    <InputLabel id="demo-simple-select-label">All States</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state}
                        label="List of tribes with respect to states"
                        onChange={handleChange}
                    >
                        {getTribeData().map((state, index) => {
                            return (
                                <MenuItem value={index} onClick={() => { tribeStateView(state.name) }} >
                                    <Typography >{state.name}</Typography>
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>

                <div className="tribeStateView" style={style} >
                    <Accordion expanded className="tribeTitle" style={style} >
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx="auto"
                        >
                            {state === '' ? 'List of Tribes in India' :tribeStateImages[0].name}
                        </AccordionSummary>
                        <AccordionDetails >
                            <TribeStateView tribeData={tribeStateImages} setTab={setTab} />
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </Router>
    );
}

export default TribeMainView