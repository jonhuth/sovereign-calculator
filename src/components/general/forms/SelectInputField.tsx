import { Box, FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import { useField } from 'formik';

export interface Option {
  label: string;
  value: string;
}

export const SelectInputField = ({ label, name, options }:
  { label: string, name: string, options: Option[] }) => {
  const [field, meta] = useField(name);
  return (
    <Box mb={2}>
      <FormControl isInvalid={!!meta.error && meta.touched}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Select {...field}>
          {options.map(({ value, label }, idx) => {
            return (
              <option key={idx} value={value}>{label}</option>
            )
          })}
        </Select>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}