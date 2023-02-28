import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {
    children?: ReactNode
}

function BaseLayout({children}: Props) {
  return (
    <Box
    sx={{
      flex: 1,
      height: '100%'
    }}
  >
    {children || <Outlet />}
  </Box>
  )
}

export default BaseLayout