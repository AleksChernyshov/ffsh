import { BottomNavigation, BottomNavigationAction, Box, Container, Grid, styled } from "@mui/material";
import { v4 as uuid } from 'uuid';
import AppBar from "../Components/AppBar";
import RedButton from "../Components/RedButton";
import { useEffect, useState } from "react";
import { Basket } from "../types/Basket";
import BasketCard from "../Components/BasketCard";
import { Extra } from "../types/ProductTypes";
import AppleIcon from '@mui/icons-material/Apple';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { ToastContainer, toast } from "react-toastify";

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  '&.Mui-selected': {
    color: '#fa3a1e', 
    '& .MuiSvgIcon-root': {
      color: '#fa3a1e', 
    },
  },
}));

const CartPage = () => {

  const storageBasket = JSON.parse(localStorage.getItem('basket') ?? '[]')
  const orders = JSON.parse(localStorage.getItem('orders') ?? '[]')

  const [basketProducts, setBasket] = useState(storageBasket)
  const [paymentMethod, setPaymentMethod] = useState(0)

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basketProducts))
  }, [basketProducts])

  const handleCreateOrder = () => {
    const orderId = uuid()
    localStorage.setItem('orders', JSON.stringify([...orders, {
      orderId,
      paymentMethod,
      orderedProducts: basketProducts
    }]))
    setBasket([])
    toast.error(`Your order was created, it #${orderId}`)
  }

  return <>
    <AppBar backButton pageTitle='Basket' />
    <Container >

      <Grid
        container
        spacing={2}
        columns={12}
        mt={2}
      >
        {
          basketProducts.map((product: Basket) => <BasketCard key={product.position} product={product} setBasket={setBasket} />)
        }
      </Grid> 

      {
        basketProducts.length ? <Box mt={4} mb={12} >
          <BottomNavigation
            showLabels
            value={paymentMethod}
            onChange={(event, newValue) => {        
              setPaymentMethod(newValue);
            }}
          >
            <StyledBottomNavigationAction label="Apple Pay" icon={<AppleIcon />} />
            <StyledBottomNavigationAction label="Credit Card" icon={<CreditCardIcon />} />
            <StyledBottomNavigationAction label="Pay manually" icon={<AttachMoneyIcon />} />
          </BottomNavigation>
        </Box> : null
      }

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
      
      <RedButton
        text={`Pay (${basketProducts.reduce((acc: number, product: Basket) => acc + ((product.format.price + product.extras.reduce((acc: number, extra: Extra) => extra.added ? acc + extra.price : acc, 0)) * product.quantity), 0)}$)`}
        action={() => handleCreateOrder()}
        style={{ width: '80%', position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fa3a1ecc',}}
      />
      
    </Container>
  </>
}

export default CartPage;