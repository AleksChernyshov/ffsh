import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Chip, FormControl, FormControlLabel, FormGroup, FormLabel, Stack, Switch, ToggleButton, ToggleButtonGroup, useTheme } from '@mui/material';
import RedButton from './RedButton';
import { Extra, Format, Product } from '../types/ProductTypes';
import { Basket } from '../types/Basket';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';

type ProductDetailsCardProps = {
  selectedProduct: Product, 
  setTotalCost: Dispatch<SetStateAction<number>>,
  setProductForOrder: Dispatch<SetStateAction<Basket | undefined>>
}

export default function ProductDetailsCard({ selectedProduct, setTotalCost, setProductForOrder }: ProductDetailsCardProps) {

  const { t } = useTranslation()
  const theme = useTheme()
  
  const [format, setFormat] = useState<Format>(selectedProduct.format[selectedProduct.format.length - 1]);
  const [extras, setExtras] = useState<Extra[]>(selectedProduct.extras);
  const [count, setCount] = useState(1);


  useEffect(() => {
    const finalPrice = (format.price + extras.reduce((acc: number, extra: Extra) => extra.added ? acc + extra.price : acc, 0)) * count    
    setTotalCost(finalPrice)
    setProductForOrder({
        position: uuid(),
        category: selectedProduct.category,
        quantity: count,
        item: selectedProduct,
        format,
        extras
      })
  }, [format, extras, count, setTotalCost, setProductForOrder, selectedProduct])
  


  const handleChangeFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormat: Format,
  ) => {
    if (!newFormat) return
    setFormat(newFormat);
  };

  const handleChangeExtras = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtras((prevExtras) => {
      return prevExtras.map((extra) => {
        if (extra.name === event.target.name) extra.added = event.target.checked
        return extra
      })
    });
  };
  
  const increment = () => {
    setCount((prev: number) => prev + 1)
  }

  const decrement = () => {
    setCount((prev: number) => {
      if (prev === 1) return 1
      return prev - 1
    })
  }

  return (
    <Card sx={{ maxWidth: 345, margin: '24px auto 160px' }}>
      <Box pt={2} px={2}>
        <CardMedia
          component="img"
          height="300"
          image={selectedProduct.img}
          alt="green iguana"
        />
      </Box>
      
      <CardContent>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
        
          {/* <Typography gutterBottom variant="h5" component="div">
            { selectedProduct.name }
          </Typography> */}
        
          <Typography variant="body2" color="text.secondary" textAlign="center">
            { selectedProduct.description }
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap> 
            { selectedProduct.chips.map((chip: string, i: number) => <Chip key={i} label={chip} />) }
          </Stack>
          
          <ToggleButtonGroup
            color="warning"
            value={format}
            exclusive
            onChange={handleChangeFormat}
            aria-label="Platform"
            sx={{
              '& .MuiToggleButtonGroup-grouped': {
                borderColor: theme.palette.customColor.mainOp, // Цвет обводки для ToggleButton
                '&.Mui-selected, &.Mui-selected:hover': {
                  color: 'black', // Цвет текста для выбранного и наведенного ToggleButton
                  backgroundColor: theme.palette.customColor.main, // Цвет фона для выбранного ToggleButton
                  borderColor: theme.palette.customColor.mainOp, // Сохраняем цвет обводки для выбранного ToggleButton
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 0, 0, 0.1)', // Легкая подсветка при наведении
                },
              },
            }}
          >
            {
              selectedProduct.format.map((format: Format, i: number) => (
                <ToggleButton key={i} value={format}>{format.size}</ToggleButton>
              ))
            }
          </ToggleButtonGroup>
          
          <FormControl sx={{alignSelf: 'flex-start', ':focus': {color: theme.palette.customColor.main}}} component="fieldset" variant="standard" >
            <FormLabel  component="legend">{ `${t("detailsPage.extra")}:` }</FormLabel>
            <FormGroup>
              {
                selectedProduct.extras.map((extra) => {
                  return <FormControlLabel
                    key={extra.name}
                    control={
                      <Switch checked={extra.added} onChange={handleChangeExtras} name={extra.name}
                        sx={{
                          '& .MuiSwitch-switchBase.Mui-checked': {
                            color: theme.palette.customColor.main,
                            '& + .MuiSwitch-track': {
                              backgroundColor: theme.palette.customColor.mainOp
                            },
                          },
                        }}
                      />
                    }
                    label={`${extra.name} (+${extra.price}$)`}
                  />
                })
              }
            </FormGroup>
          </FormControl>

        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
          <Typography gutterBottom variant='body1'>
            { t("detailsPage.numberOfItems") }
          </Typography>
          <Box display='flex' alignItems='center'>
            <RedButton text='-' action={decrement} />

            <Box display='flex' justifyContent='center' alignItems='center'
              sx={{
                fontSize: 18,
                width: '40px',
                height: '40px',
              }}
              
            >
              {count}
            </Box>
            <RedButton text='+' action={increment} />
          </Box>
        </Box>
        
        </Stack>
      </CardContent>
    </Card>
  );
}