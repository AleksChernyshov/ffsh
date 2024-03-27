import { useState } from 'react';
import Nav from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import { Button, Drawer, useTheme} from '@mui/material';
import { useNavigate } from 'react-router';
import LanguageSwitcher from './LanguageSwitcher';
import DrawerList from './DrawerList';
import { useTranslation } from 'react-i18next';

type AppBarProps = {
  backButton?: boolean, 
  pageTitle: string,
}

export default function AppBar({ backButton, pageTitle }: AppBarProps) {

  const navigate = useNavigate()
  const { t } = useTranslation()
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
      <Nav position="static">
        <Toolbar sx={{bgcolor: 'white', paddingLeft: backButton ? 0 : 2}}>
        {
          backButton ? 
            <Button
              sx={{
                color: 'black',
                backgroundColor: theme.palette.customColor.main,
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
              { t('buttons.back') }
            </Button> :
            <IconButton
              size="large"
              aria-label="menu"
              sx={{
                color: 'black',
                backgroundColor: theme.palette.customColor.main,
                '&:hover': {
                  backgroundColor: 'white'
                },
                marginLeft: '-16px',
                border: 0,
                padding: 0,
                borderRadius: 0,
                width: '56px',
                height: '56px',
              }} // '&:hover': { backgroundColor: '#fa3a1ecc' },
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          }
          
          <Typography color='black' textAlign='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pageTitle}
          </Typography>
          
          <LanguageSwitcher />
          
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <DrawerList toggleDrawer={toggleDrawer} />
          </Drawer>
          
        </Toolbar>
      </Nav>
  );
}