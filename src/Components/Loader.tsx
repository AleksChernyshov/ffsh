import { Box } from '@mui/material'
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function Loader() {
  return (
    <Box display='flex' width='100vw' height='100vh' justifyContent='center' alignItems='center'>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#fa3a1e"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </Box>
  )
}
