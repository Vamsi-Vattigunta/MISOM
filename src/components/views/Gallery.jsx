import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SimpleImageSlider from "react-simple-image-slider";
import styled from '../../styles/App.css'


const Gallery = ({ images }) => {

    const openImageObj = {
        isOpen: false,
        index: 0,
    };
    const [open, setOpen] = React.useState(openImageObj);
    const handleOpen = (index) => setOpen({ ...open, isOpen: true, index });
    const handleClose = () => setOpen({ ...open, isOpen: false, index: 0 });
    const styles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        p: 4,
    };

    let imagesView = [];

    images.map((image, index) => {
        imagesView.push(
            <Grid item xs="auto" md={3} className="tribeGallery" onClick={() => handleOpen(index)} >
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={image.url}
                        />
                    </CardActionArea>
                </Card>
            </Grid>
        );
    })

    return (
        <>
            <Grid className="tribeImageGallery" container spacing={3} flex-direction="column" >
                {imagesView}
            </Grid>
            <Grid className="tribeVideoGallery" container spacing={3}>
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
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <Modal
                className="container"
                open={open.isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles}>
                    <SimpleImageSlider
                        width={600}
                        height={400}
                        images={images}
                        showBullets={true}
                        startIndex={open.index}
                        showNavs={true}
                        autoPlay
                        autoPlayDelay={3.0}
                    />
                </Box>
            </Modal>
        </>
    )
}

export default Gallery