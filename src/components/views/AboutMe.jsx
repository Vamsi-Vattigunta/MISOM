import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import styled from '../../styles/App.css'
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@material-ui/core/Typography';
import CardContent from '@mui/material/CardContent';


const AboutMeView = () => {


    return (
        <>
            <Accordion expanded>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx="auto"
                >
                    Prof. T.Subramanyam Naidu receiving The Republic Day Commendation Award 1999 from The Lieutenant Governor for his best Research Expedition in Andaman & Nicobar Island.
                </AccordionSummary>
                <AccordionDetails >
                    <Grid container spacing={4} flex-direction="column">
                        <Grid item xs="auto" md={4} >
                            <Card sx={{ maxWidth: 400 }}>
                                <CardActionArea>
                                    <CardMedia
                                        className="css-o69gx8-MuiCardMedia-root"
                                        style={styled}
                                        component="img"
                                        height="240"
                                        image="https://camo.githubusercontent.com/6fbd4462f1ea8b58f01cd5c903213aa18aa1402fa4abb67bd986b48a02b54be1/687474703a2f2f74736e616964752e636f6d2f696d616765732f61776172642e6a7067"
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs="auto" md={3}>
                            <Card sx={{ maxWidth: 800 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image="https://camo.githubusercontent.com/cf877430066ec30b03e6b9ead93679d3894be06ad81d45c37611b2f775457ae6/687474703a2f2f74736e616964752e636f6d2f696d616765732f636572746966692e6a7067"
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded>
                <AccordionSummary sx="auto">
                    MAJOR ACHIEVEMENTS
                </AccordionSummary>
                <AccordionDetails >
                    <List>
                        <ListItemButton>
                            <ListItemText secondary="On the recommendation of the Parliament Committee, the Government of Pondicherry appointed as Director to conduct a Survey on the existence of the Scheduled Tribes in Pondicherry State. The survey was conducted and the report was submitted to the Government of India. The Ministry approved the report and now it is with the Parliament for its approval.Based on the report the government has given 1% reservation in education." />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText secondary="A Pioneering study was undertaken on the enumeration and ethnography of SHOMPEN TRIBES of Great Nicobar Island. The enumeration report was submitted to the Government of Andaman Islands. This work was very much appreciated by the Government (1996)." />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText secondary="A path breaking research work was conducted in Andaman and Nicobar Islands, and developed stratagies for the conservation and development of Andaman Tribes such as Onge, Great Andamanese, Shompen, Ecology and Environment (1996)." />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Submitted (1999) Action Plan Report to conserve the JARAWA Primitive Tribe of Andaman and Nicobar Islands to the Ministry of Social Justice and Empowerment and Commission for Scheduled Castes and Tribes of India." />
                        </ListItemButton>
                    </List>
                    <Grid container spacing={4} flex-direction="column" >
                        <Grid item xs="auto" md={3} >
                            <Card sx={{ maxWidth: 500 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="https://camo.githubusercontent.com/63f0f84e6703414617581850937c593bea128c70a2cd5f2d407db6ff173a0c42/687474703a2f2f74736e616964752e636f6d2f696d616765732f7375626d69742e6a7067"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <List>
                        <ListItemButton>
                            <ListItemText secondary="Another pioneering research study on JARAWA and SENTINELESE was conducted in the Andaman Islands (2002)." />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText secondary="Submitted to the Planning Commission, Government of India a report on the “Tribal Development in India”. The Planning Commission, Govt. of India, accepted the report and recommended to the Ministry of Welfare the various strategies suggested in my report." />
                        </ListItemButton>
                    </List>
                    <Grid container spacing={4} flex-direction="column" >
                        <Grid item xs="auto" md={3} >
                            <Card sx={{ maxWidth: 500 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image="https://camo.githubusercontent.com/53e3d952a548db718e3e66ba05a6d43a0e7f66d53a74bed1b28a5894c784d011/687474703a2f2f74736e616964752e636f6d2f696d616765732f6675747572652e6a7067"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h7" >
                                            Releasing the book The Futurology with Dr. Manfred Stassen, Director DAAD and Prof. A. Gnanam, VC
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <List>
                        <ListItemButton>
                            <ListItemText secondary="Published a textbook titled INTRODUCTION TO FUTUROLOGY which is widely prescribed in the area of forecasting, assessment studies and development of future strategies. University Grants Commission supported for writing the book (1996)." />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText secondary="Worked as State Co-ordinator for Tamil Nadu and Pondicherry for the National Project PEOPLE OF INDIA The work was completed and submitted to the Ministry of H.R.D. the same was also published (1994)." />
                        </ListItemButton>
                    </List>
                    <Grid container spacing={1} flex-direction="column" >
                        <Grid item xs="auto" md={3} >
                            <Card sx={{ maxWidth: 250 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="330"
                                        image="https://camo.githubusercontent.com/030bb3d5d8a1a5144cc7f46affd37a4d8424655288e99fb53405a8a6da3ef212/687474703a2f2f74736e616964752e636f6d2f696d616765732f756e696f6e2e6a7067"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h7" >
                                            Indo-German Cooperation - A Scholars meet With Prof. M. Laubscher and Prof. Kaap
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <List>
                        <ListItemButton>
                            <ListItemText secondary="Developed “Indo- German Project on Cultural Anthropology”. Enabled fellowship to 8 German scholars for research in Pondicherry University. Have been closely associated with Prof. M. Laubscher, Director and Dr. Hilde K. Link of the Institute of Volkerkunde and Afrikanistik, Ludwig Maximilians University, Munich, Germany." />
                        </ListItemButton>
                    </List>
                    <Grid container spacing={1} flex-direction="column" >
                        <Grid item xs="auto" md={3} >
                            <Card sx={{ maxWidth: 400 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image="https://camo.githubusercontent.com/02cfea690644bc23d5f73e73d289a01dbec186455bf0f0e6d9093542ab77d85a/687474703a2f2f74736e616964752e636f6d2f696d616765732f696e7465722e6a7067"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h7" >
                                            Releasing of the Journal by the UGC Chairman, Prof. Sukhadeo Thorat
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded>
                <AccordionSummary sx="auto">
                    MEMORANDOM OF UNDERSTANDING
                </AccordionSummary>
                <AccordionDetails >
                    <List>
                        <ListItemButton>
                            <ListItemText secondary="MOU with Dalhousie University" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText secondary="Developed an MOU with Pondicherry University and Dalhousie University on 14th May 2009 to exchange Academic ideology on teaching and Research activities and working as coordinator for the MOU." />
                        </ListItemButton>
                    </List>
                    <Grid container spacing={1} flex-direction="column">
                        <Grid item xs="auto" md={3} >
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="https://camo.githubusercontent.com/18a659f74f0cb7470b2db627d7c6b432921d123be2de223fde1a4c37bbc99336/687474703a2f2f74736e616964752e636f6d2f696d616765732f352e6a7067"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h7" >
                                            With Prof. Christopher Murphy, Chairman & Prof. Binkley, Dean
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <List>
                        <ListItemButton>
                            <ListItemText secondary="For the MOU Canadian Scholar visits" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText secondary="Prof. Robin Oakley, Associate Professor, Dalhousie University, Halifax, Canada." />
                        </ListItemButton>
                    </List>
                    <Grid container spacing={1} flex-direction="column" >
                        <Grid item xs="auto" md={3} >
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="https://camo.githubusercontent.com/3df5d175a588ab5cdd46279719c074cba6b200727a5a87cc31dc7c505b6ec03b/687474703a2f2f74736e616964752e636f6d2f696d616765732f332e6a7067"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h7" >
                                            With Dr. Robin Oakley who played a key role in establishing MOU with Prof. Naidu.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <List>
                        <ListItemButton>
                            <ListItemText secondary="Visits to Canada" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText secondary="Visited to Dalhousie University, Halifax, Canada during May-June 2011 under Sastri Indo-Canadian Academic Exchange Programme to do research field work on the MicMacq Aborigines of Canada and presented a lecture on “The culture of Indian Aborigines” to the students of Sociology and Anthropology." />
                        </ListItemButton>
                    </List>
                    <Grid container spacing={1} flex-direction="column" >
                        <Grid item xs="auto" md={3} >
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="https://camo.githubusercontent.com/06b21d9d0c0b65f473216d8b6c3e248b64570295869a35d94f69e2a0151916cb/687474703a2f2f74736e616964752e636f6d2f696d616765732f342e6a7067"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h7" >
                                            With Prof. Tom Trvers, President,Dalhousie University
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx="auto"
                >
                    PROF. T. SUBRAMANYAM NAIDU
                </AccordionSummary>
                <AccordionDetails >
                    <ListItemText secondary="Mobile: 94432-50405" />
                    <ListItemText secondary="Phone (office): 0413-2654373" />
                    <ListItemText secondary="Phone (Res): 0413-2255767" />
                    <ListItemText secondary="E-mail: tsnaidu1952@gmail.com" />
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default AboutMeView

