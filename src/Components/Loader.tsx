import { Box, useTheme } from '@mui/material'
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function Loader() {
  const theme = useTheme();
  return (
    <Box display='flex' width='100vw' height='100vh' justifyContent='center' alignItems='center'>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color={theme.palette.customColor.main}
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </Box>
  )
}
