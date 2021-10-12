import Grid from '@mui/material/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const BooksView = () => {

    const downloadEBook = (link) => {
        window.open(link,"_blank")
    }

    const books = [
        {
            title: "Growth And Development Of Tirumala-Tirupati As a Dimension Of Indian Civilization",
            link: "http://tsnaidu.com/ebooks/TSN-GROWTH%20AND%20DEVELOPMENT%20OF%20TIRUMALA-TIRUPATI%20AS%20A%20DIMENSION%20OF%20INDIAN%20CIVILIZATION.pdf",
            image: "https://user-images.githubusercontent.com/63332214/136888976-2308f275-ecdc-4877-87b1-63438a002dcf.jpg"
        },
        {
            title: "The Sacred Complex Of Tirumala Tirupati",
            link: "http://tsnaidu.com/ebooks/TSN-THE%20SACRED%20COMPLEX%20OF%20TIRUMALA%20TIRUPATI.pdf",
            image: "https://user-images.githubusercontent.com/63332214/136888978-38829fcf-fe0c-4908-8e03-d74065320b4f.jpg"
        },
        {
            title: "An Introduction To Futurology",
            link: "http://tsnaidu.com/ebooks/TSN-%20AN%20INTRODUCTION%20TO%20FUTUROLOGY.pdf",
            image: "https://user-images.githubusercontent.com/63332214/136888983-65583101-9886-41fb-a493-c4d46c066b93.jpg"
        },
        {
            title: "The Endangered Aborigines And Enviroment Of Andaman And Nicobar Islands",
            link: "http://tsnaidu.com/ebooks/TSN-%20THE%20ENDANGERED%20ABORIGINES%20AND%20ENVIROMENT%20OF%20ANDAMAN%20AND%20NICOBAR%20ISLANDS.pdf",
            image: "https://user-images.githubusercontent.com/63332214/136888985-2d1e0cf1-4d3f-47d1-b331-ae89781fa299.jpg"
        },
        {
            title: "Tribal Health In India",
            link: "http://tsnaidu.com/ebooks/TSN-%20TRIBAL%20HEALTH%20IN%20INDIA.pdf",
            image: "https://user-images.githubusercontent.com/63332214/136888987-70be03cd-6a13-4fdb-a1dc-4a192d468fae.jpg"
        },
        {
            title: "Strategic Planning For The Future Development Of The Tribes In India",
            link: "http://tsnaidu.com/ebooks/TSN-%20STRATEGIC%20PLANNING%20FOR%20THE%20FUTURE%20DEVELOPMENT%20OF%20THE%20TRIBES%20IN%20INDIA.pdf",
            image: "https://user-images.githubusercontent.com/63332214/136888960-6f080aad-b1c8-4b92-892c-b787d41fc7e6.jpg"
        },
        {
            title: "The JARAWA",
            link: "http://tsnaidu.com/ebooks/TSN-%20THE%20JARAWA.pdf",
            image: "https://user-images.githubusercontent.com/63332214/136888964-cf17a3ef-ce1c-4746-80c6-b173a7f5ce85.jpg"
        },
        {
            title: "The Scheduled Tribes In Pondicherry",
            link: "http://tsnaidu.com/ebooks/TSN-THE%20SCHEDULED%20TRIBES%20IN%20PONDICHERRY.pdf",
            image: "https://user-images.githubusercontent.com/63332214/136888967-039d11d6-fbb9-46c3-b2a1-ff9d0dcdc206.jpg"
        },
        {
            title: "Woman And Child Health",
            link: "http://tsnaidu.com/ebooks/TSN-%20WOMAN%20AND%20CHILD%20HEALTH.pdf",
            image: "https://user-images.githubusercontent.com/63332214/136888971-0a7e06e9-fb8c-4aa3-bffb-7377540f92db.jpg"
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