import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import Grid from '@mui/material/Grid';


const ArticleView = () => {
    const states = [
        {
            name: 'Andhra Pradesh',
            tribes: [
                {
                    name: 'Chenchu',
                    image: 'https://static.toiimg.com/thumb/msid-71106820,imgsize-574462,width-400,resizemode-4/71106820.jpg'
                },
                {
                    name: 'Bodo Gadaba',
                    image: 'https://i.ytimg.com/vi/93JMB_jzGD0/hqdefault.jpg'
                },
                {
                    name: 'Gutob Gadaba',
                    image: 'https://www.scstrti.in/images/phocagallery/tribes/Gadaba/thumbs/phoca_thumb_l_2.jpg'
                },
                {
                    name: 'Dongria Khond',
                    image: 'https://assets.survivalinternational.org/pictures/791/ind-don-s-571_1170.jpg'
                },
                {
                    name: 'Kultia Khond',
                    image: 'https://live.staticflickr.com/3080/5842640101_c826fc3a3c_c.jpg'
                },
                {
                    name: 'Kolam',
                    image: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2021/7/5/w900X450/Kolam_tribe.jpg?w=400&dpr=2.6'
                },
                {
                    name: 'Konda Reddi',
                    image: 'https://i0.wp.com/indiathedestiny.com/wp-content/uploads/2017/12/konda-reddi-tribe-e1513343049987.jpg?fit=690%2C460&ssl=1'
                },
                {
                    name: 'Kondasavara',
                    image: 'https://i0.wp.com/indiathedestiny.com/wp-content/uploads/2017/07/tribal-people-andhrapradesh-e1501507649500.jpg?fit=675%2C450&ssl=1'
                },
                {
                    name: 'Bondo Porja',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Inde_bondo_8593a.jpg'
                },
                {
                    name: 'Khond Porja',
                    image: 'https://www.scstrti.in/images/phocagallery/tribes/Khond/thumbs/phoca_thumb_l_6.jpg'
                },
                {
                    name: 'Parengi Porja',
                    image: 'https://uploads-ssl.webflow.com/6035572bd61c394bbb3084aa/6035572bd61c393807308947_6S-x2_ft3D2F0HHLi5HD3KUAGEGlHSBzdWfHsSJ-AAVFwKaOrt0STajhflq5iEh5PcO6NL3ssUSj6qjrSKpDhrdm0at-wGRnDiLg1xqTNQ6eTXYeBZcMddVVIkcoDeVCCbry_pT0.jpeg'
                },
                {
                    name: 'Thoti',
                    image: 'https://tstribalwelfare.cgg.gov.in/img/tribe_thoti.jpg'
                },

            ]
        },
        {
            name: 'Bihar (Including Jharkhand)',
            tribes: [
                {
                    name: 'Asur',
                    image: 'https://images.indianexpress.com/2016/03/asur-tribe-759-1.jpg'
                },
                {
                    name: 'Birhor',
                    image: 'https://lh3.googleusercontent.com/wZnYQ_lx1Ll7hl6XDWh1q5slSPQ2epx5HU4A8AlBtI04TJKi-eXPffFqJD8YO9-Qy9t4kKL6ti76BupNb6Z1M9LLpvWeRqHWin_mAa-04NdRGsodStHVP59wDLBAZJB0f_HqRmSF'
                },
                {
                    name: 'Birjia',
                    image: 'https://i.ytimg.com/vi/BVYb8jYkZuY/hqdefault.jpg'
                },
                {
                    name: 'Hill kharia',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Kharia_Tribal_ladies.jpg'
                },
                {
                    name: 'Korwa',
                    image: 'https://jharkhandculture.com/sites/default/files/inline-images/korwa.jpg'
                },
                {
                    name: 'Mal Paharia',
                    image: 'https://frankensaurus.com/images/58d3c7f5a099a004e4ba489ee28d1ed8/200-1a6397e7e5079e6e48e25212d8ba0931.jpg'
                },
                {
                    name: 'Parhaiya',
                    image: 'https://s01.sgp1.cdn.digitaloceanspaces.com/article/108039-sxaeceorvz-1544706287.jpg'
                },
                {
                    name: 'Sauriya Paharia',
                    image: 'https://img.naidunia.com/naidunia/tribes_of_jharkhand_19_11_2016.jpg'
                },
                {
                    name: 'Savar',
                    image: 'https://www.spkjharkhand.com/wp-content/uploads/2020/07/tribals-in-jharkhand-2.jpg'
                },

            ]
        },
        {
            name: 'Gujarat',
            tribes: [
                {
                    name: '',
                    image: ''
                },

            ]
        },
        {
            name: 'Karnataka',
            tribes: [
                {
                    name: '',
                    image: ''
                },

            ]
        },
        {
            name: 'Kerala',
            tribes: [
                {
                    name: '',
                    image: ''
                },

            ]
        },
        {
            name: 'Madhya Pradesh (Includng Chattisgarh)',
            tribes: [
                {
                    name: '',
                    image: ''
                },

            ]
        },
        {
            name: 'Maharashtra',
            tribes: [
                {
                    name: '',
                    image: ''
                },

            ]
        },
        {
            name: 'Manipur',
            tribes: [
                {
                    name: '',
                    image: ''
                },

            ]
        },
        {
            name: 'Orissa',
            tribes: [
                {
                    name: '',
                    image: ''
                },

            ]
        },
        {
            name: 'Rajastan',
            tribes: [
                {
                    name: '',
                    image: ''
                },

            ]
        },
        {
            name: 'Tamilnadu',
            tribes: [
                {
                    name: '',
                    image: ''
                },

            ]
        },
        {
            name: 'Tripura',
            tribes: [
                {
                    name: '',
                    image: ''
                },

            ]
        },
        {
            name: 'Uttar pradesh (Including Uttaranchal)',
            tribes: [
                {
                    name: '',
                    image: ''
                },

            ]
        },
        {
            name: 'West bengal',
            tribes: [
                {
                    name: '',
                    image: ''
                },

            ]
        },
        {
            name: 'Andaman & Nicobar Islands',
            tribes: [
                {
                    name: '',
                    image: ''
                },

            ]
        }
    ]

    const [expanded, setExpanded] = React.useState(0);
    return (
        <div>
            {states.map((state, index) => {
                return (

                    <Accordion expanded={expanded === index} onChange={(event) => setExpanded(index === expanded ? -1 : index)}>

                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx="auto"
                        >
                            {state.name}
                        </AccordionSummary>

                        <AccordionDetails className="tribesClass">
                            <Grid container spacing={3} flex-direction="column">
                                {state.tribes.map((tribe, index) => {
                                    return (

                                        <Grid item xs="auto" md={3} >
                                            <Card sx={{ maxWidth: 300 }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="140"
                                                        image={tribe.image}
                                                        alt="green iguana"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {tribe.name}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            tribes are a widespread group of squamate humans
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
        </div>
    );
}

export default ArticleView