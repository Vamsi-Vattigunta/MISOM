import Grid from '@mui/material/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const ResearchView = () => {
    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs="auto" md={3} >
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="iframe"
                            src="https://www.youtube.com/embed/uh7TmWss1VM"
                            frameborder="0"
                            alt="green iguana"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
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
            <Grid item xs="auto" md={3} >
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="iframe"
                            src="https://www.youtube.com/embed/EG7NdFRvfHQ"
                            frameborder="0"
                            alt="green iguana"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
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
            <Grid item xs="auto" md={3} >
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="iframe"
                            src="https://www.youtube.com/embed/HDmW6AunhPs"
                            frameborder="0"
                            alt="green iguana"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
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
            <Grid item xs="auto" md={3} >
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="iframe"
                            src="https://www.youtube.com/embed/YpDEsvNPql0"
                            frameborder="0"
                            alt="green iguana"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
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
        </Grid>
    )
}

export default ResearchView