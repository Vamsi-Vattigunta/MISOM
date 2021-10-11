import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';


const ArticleView = () => {
    const articles = [
        {
            title: 'Articles',
            articles: [
                'Pilgrims and Pilgrimage: A Case Study of Holy City of Tirumala - Tirupati Devasthanams, Inter National Journal of Asian Studies Vol. IV. No.1, 1984.',
                'Incidence of Malaria: And the NMED activities in Pachipenta Block, Human Science Vol.36 No.1, 1987.',
                'Cultural influences on the age at marriage among Chenchu and Sugali Tribes (ed. vol) Marriage in India Anthropological Survey of India, Calcutta, 1988.',
                'Primitive food getting strategies among the Mukha Dora tribe. Human Science Vol.37, No.4, 1988.',
                'Ecological Adaptation and cultural change among Todas of Niligris, Journal of Dravidic Studies 1:2, July 1991.',
                'Technology Forecasting - Societal Implications. Indian Economic Panorama Vol.2, No.2, July, 1992.',
                'Environmental Forecasting - Policy Planning. Indian Economic Panorama Vol.2, No.3, Oct. 1992.',
                'Social Forecasting Emerging Concepts to Study the Probable Future’s of Human societies. Indian Economic Panorama Vol.2, No.4, January 1993.',
                'An Epistemology of Prediction Searching for Definition and Boundaries. Indian economic Panorama Vol.3, No.2, July 1993.',
                'Inbreeding in the Tribal Population of Andhra Pradesh”, Journal of Anthropological Survey of India, 1994, 43:187-198.',
                'Traditionalism, Change and Continuity among the Tirumala Temple Priests”, Journal of Anthropological Survey of India, 1994, 43:1-16.',
                'The Sacred Specialists of a Great Traditional Centre: A Case Study of Tirumala - Tirupati Devasthanams Man in India, 1994, 43: 1-16.'
            ]
        },
        {
            title: 'Ethnographic articles published in the People of India, Pondicherry, Volume XXXVI, East-west Press Pvt. Ltd., Madras.1994.',
            articles: [
                'Agamudiyan, PP.76-85',
                'Ahira Vysya Chetty PP.86-89',
                'Dhakkani, PP.125-128',
                'Gramini, PP.135-138',
                'Jogi, PP.180-184',
                'Kaikolar, PP.185-192',
                'Kasai, PP.218-220',
                'Labbai, PP.232-235',
                'Mapilla, PP.251-260',
                'Maraikayar, PP.261-264',
                'Panjikutti, PP.321-322',
                'Parkavakulam, PP.338-341',
                'Pattanavar, PP.356-361',
                'Rauther, PP.371-374',
                'Sadhu Chetty, PP.378-384',
                'Sembadavan, PP.385-389',
                'Senalthalaivar, PP.390-394',
                'Sonavar, PP.395',
                'Vaniya Chetty, PP.417-421',
                'Vanniyar, PP.427-435',
                'Vethlaikaran, PP.436-439',
                'Yerukula, PP.462-467'
            ]
        },
        {
            title: 'Ethnographic articles published in the People of India, Tamil Nadu, Volume XL, Part One edt. By K.S. Singh, Anthropological Survey of India. 1997.',
            articles: [
                'Adi dravidar, pp. 88-91.',
                'Badaga, pp. 191-195',
                'Badaga christian, pp. 195-196',
                'Odiyar, pp. 196-199',
                'Bondil, pp.245-249',
                'Dhakkani, pp. 394-398',
                'Kaikolan, pp. 529-534',
                'Kamma naidu, pp. 600-607'
            ]
        },
        {
            title: 'Ethnographic articles published in the People of India, Tamil Nadu, Volume XL, Part Two edt. By K.S. Singh, Anthropological Survey of India. 1997.',
            articles: [
                'Kasai, pp. 662-665.',
                'Koosa; pp. 728-730',
                'Koodai koravar; pp.753-756',
                'Kota; pp. 759-764',
                'Lambadi; pp. 843-847',
                'Oochan; pp. 1121-1123',
                'Pagadai; pp. 1131-1134',
                'Parvatha rajakulam; pp. 1200-1203',
                'Perumkollar; pp. 1226-1228'
            ]
        },
        {
            title: 'Ethnographic articles published in the People of India, Tamil Nadu, Volume XL, Part Three edited By K.S. Singh, Anthropological Survey of India. 1997.',
            articles: [
                'Sadhu chetty, pp. 1269-1274.',
                'Valayan; pp. 1544-1547.',
                'Vaniyar; pp. 1562-1565.',
                'Vanniyakula kshatriya; pp. 1575-1579.',
                'Agamudiya vellalar; pp. 1614-1617.',
                'Thondaimandala saiva vellalar; pp. 1667-1670.',
                'Vellikkai vellalar; pp. 1679-1683.',
                'Virakodi vellalar; pp. 1683-1686.',
                'Fifty Years of India\'s Independence and the Tribal Development in India”, - Fifty years of Indian Indepence and the Polity, 2000, 169-187.',
                'The Mukhodhora: A Forest Dwelling Tribe of Andhra Pradesh”, - Environment Forest and Tribes, Anthropological Concomitance, 2000, 90-110.',
                'Process and Problems of Adaptations: Case of the Chenchus of Nalla Mallai Hills, Andhra Pradesh”, - Environment Forest and Tribes, Anthropological Concomitance, 2000, 161-179.',
                'Tribal Education in South India problems of drop-out children and Future perspectives”. Journal of Education Research and Extension, Vol.37, No.3, April-June 2000 pp.36-46.',
                'Impact of Developmental Programmes on Generation of Employment in Four Tribal Agencies of South India” Indian Economic Panorama Vol.10, No.3, Oct. 2000.',
                'The Anti - Poverty Programmes and the Tribal Development: a case study of Attapady Tribal Block in Kerala State” Indian Economic Panorama Vol.11, No.2, July 2001.',
                'The Jarawa Tribes of Andaman Islands: Adaptive Difficulties and the Problems of Future Survival”, Pondicherry University Journal of Social Sciences and Humanities, Volume 3, Number 2, July 2002.',
                'Sustainable Development of Andaman and Nicobar Forests: Problems and Future Perspectives”, Pondicherry University Journal of Social Sciences and Humanities, Volume 2, Number 1 & 2, January & July 2001.',
                'The Structural Classification of Tirumala-Tirupati Sacred Complex, Recent Trends in Historical Studies” (Festschrift to Professor Ravula Soma Reddy) Edited by. A.Satyanarayana and P.Chenna Reddy, PP 224-230, 2005. Research India Press, New Delhi.',
                'The Human Rights and Aborigines: The Problems of Future Survival”, Indian Journal of Human Rights and The Law, pp 143-164, Vol.3, No.1-2, 2006. Serials Publications, New Delhi.',
                'Educational Problems of Tribal Children in India – A Futuristic Study”, Indian Journal of Human Rights and Justice, pp 125-142, Vol.2, No.1-2, 2006. Serials Publications, New Delhi.',
                'Educational Status of Scheduled caste children and their development in Puducherry Region”, Indian Journal of Human Rights and Justice, pp 111-124, Vol.2, No.1-2, 2006. Serials Publications, New Delhi.',
                'Health Status of the Tribal Women and Children in India – A Case Study of Eleven Tribes of South India”, Edited by T.S.Naidu, pp 10-27, 2007.',
                'Health Status of Mukha Dora Tribe of Andhra Pradesh”, Edited by T.S.Naidu, pp 93-107, 2007.',
                'Tobacco, Culture and Health Problems : A Study among the Paniya Tribes of Nilgiri Hills”, Edited by T.S.Naidu, pp 139-149, 2007.',
                'Food Habits and Nutritional Status of Eleven Tribes in the Four southern states”, Edited by T.S.Naidu, pp 150-162, 2007.',
                'Family Planning Practices among the four Primitive Tribes of Nilgiri Hills in Tamilnadu”, Edited by T.S.Naidu, pp 196-202, 2007.',
                'Medico-Ethnobatanical Survey of Kadar Tribe in the Anamalai Hills of Tamilnadu, India”, Edited by T.S.Naidu, pp 249-258, 2007.',
                'Gynic and Obstetric Practices of Four Primitive Tribal Women in Tamilnadu”, Man in India, pp. 229-240, Vol.86 Nos.3&4, July-Dec. 2006, Serials Publications.',
                'Rights and Issues of Empowerment of Women in India – A Cross Culture Analysis”, Indian Journal of Human Rights and the Law, pp. 27-50, Vol.4 Nos.1&2, July-Dec. 2007, Serials Publications.',
                'Globalisation and its impact on higher education in India”, International Research Journal of Social Sciences, pp. 73-83, Vol.1 Nos.1, Jan-June. 2008, Pondicherry University, Puducherry.',
                'Socio-Economic conditions of Scheduled Castes in Pondicherry, International Research Journal of Social Sciences, pp. 177-191, Vol.1 Nos.2, July-December. 2008, Pondicherry University, Puducherry.',
                'Impact of Self Help Groups on Economic Empowerment of Women in Pondicherry Region”, International Research Journal of Social Sciences, pp. 93-117, Vol.2 Nos.1, Jan-June. 2009, Pondicherry University, Puducherry.',
                'Socio-Economic and Health Conditions of Palliyar Tribe in Kodaikanal Hills of Tamilnadu”, International Research Journal of Social Sciences, pp. 191-203, Vol.2 Nos.1, Jan-June. 2009, Pondicherry University, Puducherry.',
                'Social Stratification and Hierarchy in South India – Based on the Ethno – Historical document of Sri Ananda Ranga Pillai Diary”, International Research Journal of Social Sciences, pp. 147-161, Vol.2 Nos.2, July-December 2009, Pondicherry University, Puducherry.',
                'AIDS awareness among the Commercial Sex Workers in Tamilnadu”, International Research Journal of Social Sciences, pp. 273-279, Vol.2 Nos.2, July-December 2009, Pondicherry University, Puducherry.',
                'The Ritual aspects of Hinduism in Tirumal Temple” in the edited book “Sahiti Saurabha – Studies in Indian Culture and Literature” Edited by P.Chenna Reddy, PP 106-111, 2010. Research India Press, New Delhi.',
                'Reproductive Health Care Practices among the Primitive Tribes in Nilgiri Hills of Tamilnadu” in the edited book “Contemporary Indian Society – Issues and Perspectives” Edited by Raja Reddy Kalluri, pp 136-153, 2011. Shipra Publications, New Delhi.',
                'India in the New Millennium: A Public Health Scenario Cardiovascular diseases? Fallout of Urbanization and Modernization of the Society” International Research Journal of Social Sciences, pp. 143-153, Vol.3 Nos.1, January - June 2010, Pondicherry University, Puducherry.',
                'Social Discrimination and Harassment against the Kothis (Men who have Sex with Men) in Puducherry – A Qualitative study” International Research Journal of Social Sciences, pp. 233-245, Vol.3 Nos.2, July-December 2010, Pondicherry University, Puducherry.',
            ]
        }
    ]

    const [expanded, setExpanded] = React.useState(0);
    return (
        <div>
            {articles.map((article, index) => {
                return (
                    <Accordion expanded={expanded === index} onChange={(event) => setExpanded(index===expanded?-1:index)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx="auto"
                        >
                            {article.title}
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                {article.articles.map((article, index) => {
                                    return (
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary={(index+1)+". "+article} />
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    );
}

export default ArticleView