import { Stack, Typography } from '@mui/material';

const AboutMeView = () => {
    return (
        <Stack direction="row" spacing={5} >
            <img 
            src="https://user-images.githubusercontent.com/63332214/136890291-c1fd45bf-2130-458d-b754-a396c0fe2ada.jpg" 
            alt="T. Subramanyam Naidu"
            height="150"
            width="150"
            />
            <Typography variant="h6" >Prof. T. Subramanyam Naidu is an eminent professor having 32 years of teaching and research experience in the field of Anthropology and Futurology in India. Specialized in the fields of Social Anthropology, Sociology, Culture studies, Medical Anthropology, Conservation of Endangered Human Populations, Futurology, Environmental Impact Assessment Studies, Tribal Studies and Social Changes. Published 85 research articles, 10 books, produced 14 Ph.D’s and 48 M.Phil’s during his academic career. He has successfully completed 12 National and International research projects. Presently, he is associated with the Pondicherry University, Puducherry, India. Naidu has worked as Visiting Professor in Maxi Millian University, Germany and Dalhousie University, Canada.</Typography>
        </Stack>
    )
}

export default AboutMeView

