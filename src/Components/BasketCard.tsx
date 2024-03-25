import { Dispatch, SetStateAction } from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import RedButton from './RedButton';
import { Basket } from '../types/Basket';
import { Extra } from '../types/ProductTypes';

type MouseEvent = React.MouseEvent<HTMLButtonElement>

type BasketCardProps = {
  product: Basket,
  setBasket: Dispatch<SetStateAction<Basket[]>>
};

const BasketCard = ({ product, setBasket }: BasketCardProps) => {

  const handleRemoveFromBasket = (e: MouseEvent) => {
    e.preventDefault()
    setBasket((prevBasket) => {
      return prevBasket.filter( ({ position }) => position !== product.position)
    })
  }
    
  return (
    <Grid item xs={12} sm={6} md={6} lg={4} key={product.position}>
      <Link style={{textDecoration: 'none'}} to={`/product/${product.item.id}`} state={{category: product.category}}>
        <Card sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative', overflow: 'visible'}}>

          <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap component="div" variant="h5" fontSize={16} sx={{textDecoration: ''}}>
              {`${product.quantity} x ${product.item.name}`}
            </Typography>
            <Typography variant="subtitle1"  color="text.secondary" maxHeight='70px' sx={{overflow: 'hidden'}}>
              { `${product.format.size}` }{ product.extras.map((extra) => extra.added ? `, + ${extra.name}` : '') }
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" marginTop={2} >
              {`${(product.format.price + product.extras.reduce((acc: number, extra: Extra) => extra.added ? acc + extra.price : acc, 0)) * product.quantity}$`}
            </Typography>
          </CardContent>
          
          <CardMedia
            component="img"
            sx={{ width: 140, height: 140, borderRadius: '5px' }}
            image={product.item.img}
            alt="Live from space album cover"
          />

          <RedButton text='-' action={handleRemoveFromBasket} style={{ position: 'absolute', top: '-8px', right: '-8px' }} />

        </Card>
      </Link>
    </Grid>
  );
}

export default BasketCard