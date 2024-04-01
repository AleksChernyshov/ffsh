import { useLocation, useNavigate, useParams } from "react-router";
import ProductDetailsCard from "../Components/ProductDetailsCard";
import { Container, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import AppBar from "../Components/AppBar";
import pizzas from "../data/pizza.json"
import kebabs from "../data/kebabs.json"
import Loader from "../Components/Loader";
import RedButton from "../Components/RedButton";
import { Product } from "../types/ProductTypes";
import { Basket } from "../types/Basket";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const ProductDescriptionPage = () => {

  const theme = useTheme()
  const { id } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { state: { category } } = useLocation()
  
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const [productForOrder, setProductForOrder] = useState<Basket | undefined>()
  const [totalCost, setTotalCost] = useState(0)

  const storageBasket = JSON.parse(localStorage.getItem('basket') ?? '[]')

  const handleFormTheOrder = async () => {
    localStorage.setItem('basket', JSON.stringify([...storageBasket, productForOrder]))
    toast.error(`${selectedProduct?.name} added to the basket`)
  }

  const handleAddToBasket = async () => {
    await handleFormTheOrder()
    navigate('/')
  } 

  useEffect(() => {
    let product;
    switch (category) {
      case "pizza":
        product = pizzas.find((pizza) => pizza.id === id);
        break;
      case "kebab":
        product = kebabs.find((kebab) => kebab.id === id);
        break;
      default:
        product = undefined;
    }

    setSelectedProduct(product);
    // setProductForOrder()
  }, [id, category]); 

  if (!selectedProduct) {
    return <Loader />
  }
    
  return <>
    <AppBar backButton pageTitle={selectedProduct.name} />
    <Container>
      <ProductDetailsCard selectedProduct={selectedProduct} setTotalCost={setTotalCost} setProductForOrder={setProductForOrder} />

      <RedButton
        text={`${t("buttons.addToBasket")} (${totalCost}$)`}
        action={() => handleAddToBasket()}
        style={{ width: '80%', height: '56px' , position: 'fixed', bottom: '60px', left: '50%', transform: 'translateX(-50%)', backgroundColor: theme.palette.customColor.main }}
      />
    </Container>
  </>;
}

export default ProductDescriptionPage;