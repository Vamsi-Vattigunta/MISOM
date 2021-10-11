import Grid from '@mui/material/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const BooksView = () => {

    const downloadEBook = (link) => {
        window.open(link)
    }

    const books = [
        {
            title: "Growth And Development Of Tirumala-Tirupati As a Dimension Of Indian Civilization",
            link: "http://tsnaidu.com/ebooks/TSN-GROWTH%20AND%20DEVELOPMENT%20OF%20TIRUMALA-TIRUPATI%20AS%20A%20DIMENSION%20OF%20INDIAN%20CIVILIZATION.pdf",
            image: "http://tsnaidu.com/images/book1.jpg"
        },
        {
            title: "The Sacred Complex Of Tirumala Tirupati",
            link: "http://tsnaidu.com/ebooks/TSN-THE%20SACRED%20COMPLEX%20OF%20TIRUMALA%20TIRUPATI.pdf",
            image: "http://tsnaidu.com/images/book2.jpg"
        },
        {
            title: "An Introduction To Futurology",
            link: "http://tsnaidu.com/ebooks/TSN-%20AN%20INTRODUCTION%20TO%20FUTUROLOGY.pdf",
            image: "http://tsnaidu.com/images/book3.jpg"
        },
        {
            title: "The Endangered Aborigines And Enviroment Of Andaman And Nicobar Islands",
            link: "http://tsnaidu.com/ebooks/TSN-%20THE%20ENDANGERED%20ABORIGINES%20AND%20ENVIROMENT%20OF%20ANDAMAN%20AND%20NICOBAR%20ISLANDS.pdf",
            image: "http://tsnaidu.com/images/book4.jpg"
        },
        {
            title: "Tribal Health In India",
            link: "http://tsnaidu.com/ebooks/TSN-%20TRIBAL%20HEALTH%20IN%20INDIA.pdf",
            image: "http://tsnaidu.com/images/book5.jpg"
        },
        {
            title: "Strategic Planning For The Future Development Of The Tribes In India",
            link: "http://tsnaidu.com/ebooks/TSN-%20STRATEGIC%20PLANNING%20FOR%20THE%20FUTURE%20DEVELOPMENT%20OF%20THE%20TRIBES%20IN%20INDIA.pdf",
            image: "http://tsnaidu.com/images/book6.jpg"
        },
        {
            title: "The JARAWA",
            link: "http://tsnaidu.com/ebooks/TSN-%20THE%20JARAWA.pdf",
            image: "http://tsnaidu.com/images/book7.jpg"
        },
        {
            title: "The Scheduled Tribes In Pondicherry",
            link: "http://tsnaidu.com/ebooks/TSN-THE%20SCHEDULED%20TRIBES%20IN%20PONDICHERRY.pdf",
            image: "http://tsnaidu.com/images/book8.jpg"
        },
        {
            title: "Woman And Child Health",
            link: "http://tsnaidu.com/ebooks/TSN-%20WOMAN%20AND%20CHILD%20HEALTH.pdf",
            image: "http://tsnaidu.com/images/book9.jpg"
        },
    ]

    return (
        <Grid container spacing={3} justifyContent="center">
            {books.map((book, index) => {
                return (
                    <Grid item xs="auto" md={3} onClick={(event) => downloadEBook(book.link)}>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={book.image}
                                    alt={book.title}
                                    height="350"
                                    width="300"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        {book.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default BooksView