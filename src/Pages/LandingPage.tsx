import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import RedButton from "../Components/RedButton";
import { useNavigate } from "react-router";

const links = [
  { title: 'Service Terms', url: '/'},
  { title: 'Feedback', url: '/'},
  { title: 'About Us', url: '/' }
]

const LandingPage = () => {

  const navigate = useNavigate()

  return <>
    <Box sx={{
        border: '1px dashed gray',
        height: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '4px'
      }}
      onClick={() => navigate('/')}
    >
      <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'black', fontWeight: 'bold', color: 'white', padding: '0 8px'}}>
        <Typography component='span' >F6ST</Typography>
        <Typography component='span' color='#fa3a1e' >.com</Typography>
      </Typography>
    </Box>
    <Container>

      <Box pt={2} sx={{ display: 'flex', justifyContent: 'space-between', gap: 1}}>
        
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
          <Typography  component="div" variant="h4">
            Fast QR code ordering
          </Typography>
          <Typography variant="body1"  maxHeight='70px'>
            Unlock a 6% Comeback Reward for your loyal customers.
          </Typography>
          <Typography variant="body1"  maxHeight='70px'>
            Register today and pay 0% fee to us for 3 months.
          </Typography>
          <RedButton
            text='Register'
            action={() => { }}
            style={{ width: '100%', maxWidth: '250px', backgroundColor: '#fa3a1e', alignSelf: 'center'}}
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
          Frequently asked questions
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography  component="div" variant="h6">
            How much F6ST costs?
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...... payment goes directly to you
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography  component="div" variant="h6">
            Why would I use F6ST?
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography  component="div" variant="h6">
            Is F6ST for restaurants only?
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography  component="div" variant="h6">
            How should I contact you?
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
            <Typography key={index} onClick={() => navigate(link.url)}>
              {link.title}
            </Typography>
          ))
        }
      </Stack>
    </Box>
  </>;
}

export default LandingPage;