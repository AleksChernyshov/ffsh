import { useNavigate } from "react-router";
import ProductCard from "../Components/ProductCard";
import { Box, Container, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import AppBar from "../Components/AppBar";
import pizzas from "../data/pizza.json"
import kebabs from "../data/kebabs.json"
import RedButton from "../Components/RedButton";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { InboxOutlined, MailOutline } from "@mui/icons-material";

const links = [
  { title: 'Order page', url: '/orders'},
  { title: 'Basket', url: '/cart'},
  { title: 'Landing Page', url: '/landing' }
]


const ProductsPage = () => {

  const navigate = useNavigate()

  const storageBasket = JSON.parse(localStorage.getItem('basket') ?? '[]')

  const [basket, setBasket] = useState(storageBasket)

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} p={2} role="presentation" onClick={toggleDrawer(false)}>
      <Typography>{`Pizzas (${pizzas.length})`}</Typography>
      <List>
        {pizzas.map((pizza, index) => (
          <ListItem key={pizza.id} disablePadding onClick={() => navigate(`/product/${pizza.id}`, {state: {category: pizza.category}})}>
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
          <ListItem key={kebab.id} disablePadding onClick={() => navigate(`/product/${kebab.id}`, {state: {category: kebab.category}})}>
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
          <ListItem key={index} disablePadding onClick={() => navigate(link.url)}>
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
  );

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])
  

  return (
    <>
    <AppBar pageTitle="Products" toggleDrawer={toggleDrawer} />
      <Container>
        <Box mt={2} display='flex' flexDirection='column' gap={2}>
          <Typography  variant="h4" component="div">
            Pizza
          </Typography>
          <Grid
            container
            spacing={2}
            columns={12}
          >
            {
              pizzas.map((pizza) => <ProductCard key={pizza.id} product={pizza} setBasket={setBasket} />)
            }
          </Grid> 
        </Box>

        <Box mt={2} mb={10} display='flex' flexDirection='column' gap={2}>
          <Typography  variant="h4" component="div">
            Kebab
          </Typography>
          <Grid
            container
            spacing={2}
            columns={12}
          >
            {
              kebabs.map((kebab) => <ProductCard key={kebab.id} product={kebab} setBasket={setBasket} />)
            }
          </Grid> 
        </Box>

        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        
        <RedButton
          text={`Basket (${basket.length})`}
          action={() => navigate('/cart')}
          style={{ width: '80%', position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fa3a1ecc',}}
        />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          // theme="dark"
        />
      </Container>
    </>
  );
}

export default ProductsPage;