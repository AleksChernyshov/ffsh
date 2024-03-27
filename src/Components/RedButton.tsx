import { IconButton, useTheme } from "@mui/material"

type RedButtonProps = {
  text: string,
  action: (e: any) => void, 
  disabled?: boolean,
  style?: {}
}

export default function RedButton({ text, action, disabled, style }: RedButtonProps) {
  const theme = useTheme()
  return (
    <IconButton
      sx={{
        '&:hover': {
          backgroundColor: '#ffffffcc',
        },
        backgroundColor: theme.palette.customColor.main,
        color: 'black',
        fontSize: 18,
        fontWeight: 600,
        border: 0,
        padding: 0,
        margin: 0,
        borderRadius: 0,
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        ...style
      }}
      disabled={disabled}
      onClick={(e) => action(e)}
    >
      { text }
    </IconButton>
  )
}
