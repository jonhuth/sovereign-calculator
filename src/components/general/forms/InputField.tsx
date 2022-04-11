import { Box, FormLabel, Input } from '@chakra-ui/react';
import { ErrorMessage, useField } from 'formik';

export const InputField = ({ label, ...props }: { label: string, name: string, type: string }) => {
  const [field] = useField(props);
  return (
    <Box mb={2}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input autoComplete='off' {...field} {...props} />
      <ErrorMessage name={field.name} />
    </Box>
  )
}
