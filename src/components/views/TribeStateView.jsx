import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { CardActionArea, CardContent } from '@mui/material';
import Typography from '@material-ui/core/Typography';

const TribeStateView = ({ tribeData, setTab }) => {

    const tribeDataView = (name) => {
        setTab('/tribeDetail/' + name);
    }

    return (
        <>
            <Grid container spacing={3} flex-direction="column"  >
                {tribeData.map((state, index) => {
                    return (
                        <Grid item xs="auto" md={3} onClick={() => { tribeDataView(state.name) }} >
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={state.image}
                                        alt="green iguana"
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h7" component="div">
                                            {state.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}
export default TribeStateView