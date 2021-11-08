import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const MapsView = () => {

    return (
        <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs="auto" >
                <Card sx={{ maxWidth: 800 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="https://user-images.githubusercontent.com/63332214/140709685-c0c62c00-6e2e-41ea-a0e5-5f76d4dee986.png"
                            alt="map"
                            height="700"
                            width="500"
                        />
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    )
}

export default MapsView