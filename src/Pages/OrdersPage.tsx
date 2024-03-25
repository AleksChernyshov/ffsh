import { Box, Container, Grid, Typography } from "@mui/material";
import AppBar from "../Components/AppBar";
import { Basket } from "../types/Basket";
import { useNavigate } from "react-router";
import RedButton from "../Components/RedButton";
import { Order } from "../types/Order";
import OrderCard from "../Components/OrderCard";

const OrdersPage = () => {
  const navigate = useNavigate()

  const orders = JSON.parse(localStorage.getItem('orders') ?? '[]')

  return <>
    <AppBar backButton pageTitle='Orders' />
    <Container style={{marginBottom: '120px'}}>

      {
        orders.map((order: Order) => {
          return <>
            <Box mt={2} display='flex' flexDirection='column' gap={2}>
              <Typography variant="h5" component="div">
                { `Order: ${order.orderId}` }
              </Typography>
              <Grid
                container
                spacing={2}
                columns={12}
              >
                {
                  order.orderedProducts.map((product: Basket) => <OrderCard key={product.position} product={product} />)
                }
              </Grid> 
            </Box>
            
          </>
        })
      }

      <RedButton
        text={'New Order'}
        action={() => navigate('/')}
        style={{ width: '80%', position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fa3a1ecc',}}
      />
      
    </Container>
  </>
}

export default OrdersPage;