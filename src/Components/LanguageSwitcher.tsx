import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const theme = useTheme()
  

  const handleChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl variant="outlined">
      <Select
        labelId="language-select-label"
        id="language-select"
        value={i18n.language}
        onChange={handleChange}
        sx={{
          height: '40px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent', 
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.customColor.main, 
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.customColor.main, 
          },
          '& .MuiSvgIcon-root': {
            color: theme.palette.customColor.main, 
          },
        }}
      >
        <MenuItem value="en"><img width='24px' src='/assets/Flag_of_the_United_States.svg' alt='UsaIcon' /> </MenuItem>
        <MenuItem value="hu"><img width='24px' src='/assets/Flag_of_Hungary.svg' alt='HungaryIcon' /> </MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;