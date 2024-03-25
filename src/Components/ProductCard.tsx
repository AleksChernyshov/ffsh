import { Dispatch, SetStateAction } from 'react';
import { v4 as uuid } from 'uuid';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import RedButton from './RedButton';
import { Product } from '../types/ProductTypes';
import { Basket } from '../types/Basket';
import { toast } from 'react-toastify';

type MouseEvent = React.MouseEvent<HTMLButtonElement>

type ProductCardProps = {
  product: Product,
  setBasket: Dispatch<SetStateAction<Basket[]>>
};

const ProductCard = ({ product, setBasket }: ProductCardProps) => {

  

  const handleAddToBasket = (e: MouseEvent) => {
    e.preventDefault()
    setBasket((prevBasket) => {
      if (prevBasket.some((item) => (item.item.id === product.id) && (item.category === product.category))) { 
        return prevBasket.map((item) => {
          if ((item.item.id === product.id) && (item.category === product.category)) {
            item.quantity += 1
          }
          return item
        })
      }

      // console.log(prevBasket.some((item) => item.item.id === product.id));
      
      return [...prevBasket, {
        position: uuid(),
        category: product.category,
        quantity: 1,
        item: product,
        format: product.format[product.format.length - 1],
        extras: []
      }]
    })
    toast.error(`${product.name} added to the basket`)
  }
    
  return (
    <Grid item xs={12} sm={6} md={6} lg={4} key={product.id}>
      <Link style={{textDecoration: 'none'}} to={`/product/${product.id}`} state={{category: product.category}}>
        <Card sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative', overflow: 'visible'}}>

          <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap component="div" variant="h5" fontSize={16} sx={{textDecoration: ''}}>
              {product.name}
            </Typography>
            <Typography variant="subtitle1"  color="text.secondary" fontSize={10} maxHeight='70px' sx={{overflow: 'hidden'}}>
              {product.description}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" marginTop={2} >
              {`${product.format[0].price}-${product.format[product.format.length - 1].price}$`}
            </Typography>
          </CardContent>
          
          <CardMedia
            component="img"
            sx={{ width: 140, borderRadius: '5px'}}
            image={product.img}
            alt="Live from space album cover"
          />

          <RedButton text='+' action={handleAddToBasket} style={{position: 'absolute', top: '-8px', right: '-8px'}} />

        </Card>
      </Link>
    </Grid>
  );
}

export default ProductCard