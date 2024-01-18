import React from 'react'
import CallToActionWithVideo from '../Components/CallToActionWithVideo'
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux';

const ItemPreview = ({mode}) => {
  return (
    <Box>
      <CallToActionWithVideo mode={mode} />
    </Box>
  )
}

export default ItemPreview
