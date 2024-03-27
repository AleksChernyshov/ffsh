import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import AppBar from "../Components/AppBar";
import { Basket } from "../types/Basket";
import { useNavigate } from "react-router";
import RedButton from "../Components/RedButton";
import { Order } from "../types/Order";
import OrderCard from "../Components/OrderCard";
import { useTranslation } from "react-i18next";

const OrdersPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const theme = useTheme()

  const orders = JSON.parse(localStorage.getItem('orders') ?? '[]')

  return <>
    <AppBar pageTitle={t('appBar.orders')} />
    <Container style={{marginBottom: '120px'}}>

      {
        orders.map((order: Order) => {
          return <>
            <Box mt={2} display='flex' flexDirection='column' gap={2}>
              <Typography variant="h5" component="div">
                { `${t('orderPage.order')}: ${order.orderId}` }
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
        text={t('buttons.newOrder')}
        action={() => navigate('/')}
        style={{ width: '80%', height: '56px', position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: theme.palette.customColor.mainOp }}
      />
      
    </Container>
  </>
}

export default OrdersPage;