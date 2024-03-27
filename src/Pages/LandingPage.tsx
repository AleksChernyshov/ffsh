import { Box, CardMedia, Container, Stack, Typography, useTheme } from "@mui/material";
import RedButton from "../Components/RedButton";
import { useNavigate } from "react-router";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const links = [
  { title: 'Service Terms', url: '/'},
  { title: 'Feedback', url: '/'},
  { title: 'About Us', url: '/' }
]

const LandingPage = () => {

  const navigate = useNavigate()
  const { t } = useTranslation()
  const theme = useTheme()

  return <>
    <Box sx={{
        border: '1px dashed gray',
        height: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '4px'
      }}
    >
      <Typography onClick={() => navigate('/')} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'black', fontWeight: 'bold', color: 'white', padding: '0 8px', cursor: 'pointer'}}>
        <Typography component='span' >F6ST</Typography>
        <Typography component='span' color={ theme.palette.customColor.main } >.com</Typography>
      </Typography>
      <Box display='flex' alignItems='center' gap={2} mr={2}>
        <LanguageSwitcher />
        <Typography sx={{cursor: 'pointer'}} onClick={() => navigate('/')}>
          { t("landingPage.login") }
        </Typography>
      </Box>
    </Box>
    <Container>

      <Box pt={2} sx={{ display: 'flex', justifyContent: 'space-between', gap: 1}}>
        
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
          <Typography  component="div" variant="h4">
            { t("landingPage.fastQR") }
          </Typography>
          <Typography variant="body1"  maxHeight='70px'>
            { t("landingPage.unlock") }
          </Typography>
          <Typography variant="body1"  maxHeight='70px'>
            { t("landingPage.registerToday") }
          </Typography>
          <RedButton
            text={ t("landingPage.register") }
            action={() => { }}
            style={{ width: '100%', maxWidth: '250px', backgroundColor: theme.palette.customColor.main, alignSelf: 'center'}}
          />
        </Box>

          <CardMedia
            component="img"
            sx={{ width: '50%', borderRadius: '5px' }}
            image='/assets/image.png'
            alt="Live from space album cover"
          />

      </Box>

      <Box mt={4} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography  component="div" variant="h5">
          { t("landingPage.frequently") }
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography  component="div" variant="h6">
            { t("landingPage.howMuch") }
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...... payment goes directly to you
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography  component="div" variant="h6">
            { t("landingPage.why") }
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography  component="div" variant="h6">
            { t("landingPage.estaurantsOnly") }
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography  component="div" variant="h6">
            { t("landingPage.contact") }
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Fill or Contact Form here
          </Typography>
        </Box>

      </Box>
      
    </Container>
    <Box sx={{
      border: '1px dashed gray',
      height: '30px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '4px',
      paddingRight: '22px'
    }}>
      <Stack direction="row" spacing={2}>
        {
          links.map((link, index) => (
            <Typography key={index} sx={{cursor: 'pointer'}} onClick={() => navigate(link.url)}>
              {link.title}
            </Typography>
          ))
        }
      </Stack>
    </Box>
  </>;
}

export default LandingPage;