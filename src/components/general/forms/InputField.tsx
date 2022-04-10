import { Box, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { useField } from 'formik'

export const InputField = ({ label, ...props}: {label: string, name: string, type: string}) => {
  const [field, meta] = useField(props);
  return (
    <Box mb={2}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input autoComplete='off' {...field} {...props} />
    </Box>
  )
}
