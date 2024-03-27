
import Typography from '@mui/material/Typography';
import { Box, Divider,  List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { InboxOutlined, MailOutline } from '@mui/icons-material';
import pizzas from "../data/pizza.json"
import kebabs from "../data/kebabs.json"
import { useNavigate } from 'react-router';

type DrawerListProps = { 
  toggleDrawer: (newOpen: boolean) => void
}

const links = [
  { title: 'Order page', url: '/orders'},
  { title: 'Basket', url: '/cart'},
  { title: 'Landing Page', url: '/landing' }
]

const DrawerList = ({toggleDrawer}: DrawerListProps) => {
  
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <Box sx={{ width: 250 }} p={2} role="presentation" onClick={() => toggleDrawer(false)}>
      <Typography>{`Pizzas (${pizzas.length})`}</Typography>
      <List>
        {pizzas.map((pizza, index) => (
          <ListItem 
            key={pizza.id} 
            sx={{'&:hover': { backgroundColor: theme.palette.customColor.main }}} 
            disablePadding 
            onClick={() => navigate(`/product/${pizza.id}`, {state: {category: pizza.category}})}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
              </ListItemIcon>
              <ListItemText primary={pizza.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <Typography>{`Kebabs (${kebabs.length})`}</Typography>
        {kebabs.map((kebab, index) => (
          <ListItem 
            key={kebab.id} 
            sx={{'&:hover': { backgroundColor: theme.palette.customColor.main }}} 
            disablePadding 
            onClick={() => navigate(`/product/${kebab.id}`, {state: {category: kebab.category}})}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
              </ListItemIcon>
              <ListItemText primary={kebab.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <Typography>Links</Typography>
        {links.map((link, index) => (
          <ListItem 
            key={index} 
            sx={{'&:hover': { backgroundColor: theme.palette.customColor.main }}} 
            disablePadding 
            onClick={() => navigate(link.url)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
              </ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default DrawerList