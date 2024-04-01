import { BottomNavigation, BottomNavigationAction, Box, Container, Grid, styled, useTheme } from "@mui/material";
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
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  '&.Mui-selected': {
    color: theme.palette.customColor.main, 
    '& .MuiSvgIcon-root': {
      color: theme.palette.customColor.main, 
    },
  },
}));

const CartPage = () => {

  const navigate = useNavigate()

  const { t } = useTranslation()

  const theme = useTheme()

  const storageBasket = JSON.parse(localStorage.getItem('basket') ?? '[]')
  const orders = JSON.parse(localStorage.getItem('orders') ?? '[]')

  const [basketProducts, setBasket] = useState(storageBasket)
  const [paymentMethod, setPaymentMethod] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basketProducts))
    setTotalPrice(basketProducts.reduce((acc: number, product: Basket) => acc + ((product.format.price + product.extras.reduce((acc: number, extra: Extra) => extra.added ? acc + extra.price : acc, 0)) * product.quantity), 0))
  }, [basketProducts, navigate])

  const handleCreateOrder = async () => {
    const orderId = uuid()
    localStorage.setItem('orders', JSON.stringify([ {
      orderId,
      paymentMethod,
      orderedProducts: basketProducts
    }, ...orders]))
    setBasket([])
    toast.error(`Your order was created, it #${orderId}`)
  }

  const handlePay = async() => {
    await handleCreateOrder()
    navigate('/orders')
  }

  return <>
    <AppBar backButton pageTitle={t('appBar.basket')} />
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
            <StyledBottomNavigationAction label={`${t('basketPage.applePay')}`} icon={<AppleIcon />} />
            <StyledBottomNavigationAction label={`${t('basketPage.creditcard')}`} icon={<CreditCardIcon />} />
            <StyledBottomNavigationAction label={`${t('basketPage.payManualy')}`} icon={<AttachMoneyIcon />} />
          </BottomNavigation>
        </Box> : null
      }
      
      <RedButton
        text={`${t('buttons.pay')} (${totalPrice}$)`}
        action={() => handlePay()}
        disabled={!totalPrice}
        style={{ width: '80%', height: '56px', position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: theme.palette.customColor.main }}
      />
      
    </Container>
  </>
}

export default CartPage;