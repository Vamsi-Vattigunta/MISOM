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
        <div >
            <Grid container spacing={3} flex-direction="column"  >
                {tribeData.map((state, index) => {
                    return state.tribes.map((tribe) => {
                        return (
                            <Grid item xs="auto" md={3} onClick={() => { tribeDataView(tribe.name) }} >
                                <Card sx={{ maxWidth: 300 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            className="tribeMainView"
                                            component="img"
                                            height="140"
                                            image={tribe.imageGallery[0].url}
                                            alt="green iguana"
                                        />
                                        <CardContent >
                                            <Typography gutterBottom variant="h7" component="div">
                                                {tribe.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })
                })}
            </Grid>
        </div>
    )
}
export default TribeStateView