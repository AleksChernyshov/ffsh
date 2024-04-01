import { useNavigate } from "react-router";
import ProductCard from "../Components/ProductCard";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import AppBar from "../Components/AppBar";
import pizzas from "../data/pizza.json"
import kebabs from "../data/kebabs.json"
import RedButton from "../Components/RedButton";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ProductsPage = () => {

  const navigate = useNavigate()
  const { t } = useTranslation()
  const theme = useTheme()

  const storageBasket = JSON.parse(localStorage.getItem('basket') ?? '[]')

  const [basket, setBasket] = useState(storageBasket)

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])
  

  return (
    <>
      <AppBar pageTitle={ t('appBar.products') } />
      <Container>
        <Box mt={2} display='flex' flexDirection='column' gap={2}>
          <Typography  variant="h4" component="div">
            { t("productsPage.pizza") }
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

        <Box mt={2} mb={12} display='flex' flexDirection='column' gap={2}>
          <Typography  variant="h4" component="div">
            { t("productsPage.kebab") }
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
        
        <RedButton
          text={`${ t('buttons.basket') } (${basket.length})`}
          action={() => navigate('/cart')}
          style={{ width: '80%', height: '56px', position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: theme.palette.customColor.main}}
        />

      </Container>
    </>
  );
}

export default ProductsPage;