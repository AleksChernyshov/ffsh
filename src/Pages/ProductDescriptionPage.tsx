import { useLocation, useParams } from "react-router";
import ProductDetailsCard from "../Components/ProductDetailsCard";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import AppBar from "../Components/AppBar";
import pizzas from "../data/pizza.json"
import kebabs from "../data/kebabs.json"
import Loader from "../Components/Loader";
import RedButton from "../Components/RedButton";
import { Product } from "../types/ProductTypes";
import { Basket } from "../types/Basket";
import { ToastContainer, toast } from "react-toastify";

const ProductDescriptionPage = () => {

  const {id} = useParams()
  const { state: { category } } = useLocation()
  
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const [productForOrder, setProductForOrder] = useState<Basket | undefined>()
  const [totalCost, setTotalCost] = useState(0)

  const storageBasket = JSON.parse(localStorage.getItem('basket') ?? '[]')

  const handleFormTheOrder = () => {
    localStorage.setItem('basket', JSON.stringify([...storageBasket, productForOrder]))
    toast.error(`${selectedProduct?.name} added to the basket`)
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
        text={`Add to Basket (${totalCost}$)`}
        action={() => handleFormTheOrder()}
        style={{ width: '100%', maxWidth: '345px', position: 'fixed', bottom: '60px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fa3a1ecc',}}
      />
    </Container>
  </>;
}

export default ProductDescriptionPage;