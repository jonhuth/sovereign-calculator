import { Box, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useField } from 'formik';

export const InputField = ({ label, name, type }: { label: string, name: string, type: string }) => {
  const [field, meta] = useField(name);
  return (
    <Box mb={2}>
      <FormControl isInvalid={!!meta.error && meta.touched}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Input autoComplete='off' {...field} type={type} />
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}
