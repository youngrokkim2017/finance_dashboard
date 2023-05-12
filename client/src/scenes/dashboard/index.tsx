import React from 'react'
import { Box, useTheme } from '@mui/material'

type Props = object

const Dashboard = (props: Props) => {
  const { palette } = useTheme()

  return (
    <Box color={palette.grey[300]}>
      Dashboard
    </Box>
  )
}

export default Dashboard