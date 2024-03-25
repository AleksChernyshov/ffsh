
import Nav from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
// import LanguageSwitcher from './LanguageSwitcher';

type AppBarProps = {
  backButton?: boolean, 
  pageTitle: string,
  toggleDrawer?: any
}

export default function AppBar({ backButton, pageTitle, toggleDrawer }: AppBarProps) {
  
  const navigate = useNavigate()
  return (
      <Nav position="static">
        <Toolbar sx={{bgcolor: 'white', paddingLeft: backButton ? 0 : 2}}>
        {
          backButton ? 
            <Button
              sx={{
                color: 'black',
                backgroundColor: '#fa3a1e',
                fontWeight: 700,
                border: 0,
                padding: 0,
                margin: 0,
                borderRadius: 0,
                width: '80px',
                height: '56px',
                cursor: 'pointer'
              }}
              onClick={() => navigate(-1)}
            >
              BACK
            </Button> :
            <IconButton
              size="large"
              edge="start"
              // color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: 'black', '&:hover': { backgroundColor: '#fa3a1ecc', } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
        }
          <Typography color='black' textAlign='center' mr='60px' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pageTitle}
        </Typography>
        {/* <LanguageSwitcher /> */}
        </Toolbar>
      </Nav>
  );
}