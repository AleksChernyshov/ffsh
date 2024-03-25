import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

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
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fr">France</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;