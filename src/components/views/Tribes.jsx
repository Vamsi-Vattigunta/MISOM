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
                <div className="mainHeader"> Particular Vulnerable Tribes Groups In India</div>
                <FormControl sx={{ minWidth: 340 }} className="statesDropdown" style={style}>
                    <InputLabel id="demo-simple-select-label">All States</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state}
                        label="All States"
                        onChange={handleChange}
                    >
                        {getTribeData().map((state, index) => {
                            return (
                                <MenuItem value={index} onClick={() => { tribeStateView(state.name) }} >
                                    {state.name}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>

                <div className="tribeStateView">
                    <Accordion expanded >
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx="auto"
                        >
                            <div className="allStatesHeader">
                                {state === '' ? 'List of PV Tribes in India' : tribeStateImages[0].name}
                            </div>
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