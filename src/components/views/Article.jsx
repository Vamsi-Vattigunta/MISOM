import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ArticleView = () => {
    const articles = [
        {
            title :'Articles',
            articles : []
        },
        {
            title : 'Ethnographic articles published in the People of India, Pondicherry, Volume XXXVI, East-west Press Pvt. Ltd., Madras.1994.',
            articles : []
        },
        {
            title :'Ethnographic articles published in the People of India, Tamil Nadu, Volume XL, Part One edt. By K.S. Singh, Anthropological Survey of India. 1997.',
            articles : []
        },
        {
            title :'Ethnographic articles published in the People of India, Tamil Nadu, Volume XL, Part Two edt. By K.S. Singh, Anthropological Survey of India. 1997.',
            articles : []
        },
        {
            title :'Ethnographic articles published in the People of India, Tamil Nadu, Volume XL, Part Three edited By K.S. Singh, Anthropological Survey of India. 1997.',
            articles : []
        }
    ]

    const [expanded, setExpanded] = React.useState(0);
  return (
    <div>
      {articles.map((article,index)=>{
          return(
            <Accordion expanded={expanded===index} onChange={(event) => setExpanded(index) }>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx = "auto"
            >
              {article.title}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          )
      })}
    </div>
  );
}

export default ArticleView