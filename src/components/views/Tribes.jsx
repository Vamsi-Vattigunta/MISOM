import Grid from '@mui/material/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const TribeView = () => {
    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs="auto" md={3} >
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.gannett-cdn.com/presto/2018/11/27/USAT/8695fe51-fd20-4569-b644-3506c2ab7f08-Yanomami.JPG?crop=2616,1472,x778,y336&width=2616&height=1472&format=pjpg&auto=webp"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tribe 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                tribes are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs="auto" md={3}>
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://assets.survivalinternational.org/pictures/1234/ind-wp-dani-adg-11_article_column@2x.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tribe 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                tribes are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs="auto" md={3}>
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://ihplb.b-cdn.net/wp-content/uploads/2018/09/news-e1618375706586.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tribe 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                tribes are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs="auto" md={3}>
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.remotelands.com/travelogues/app/uploads/2014/07/Loikaw-1.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tribe 4
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                tribes are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    )
}

export default TribeView