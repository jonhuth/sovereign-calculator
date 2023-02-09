import { Box, FormLabel, Select } from '@chakra-ui/react';
import { ErrorMessage, useField } from 'formik';

export interface Option {
  label: string;
  value: string;
}

export const SelectInputField = ({ label, options, ...props }:
  { label: string, name: string, options: Option[] }) => {
  const [field] = useField(props);
  return (
    <Box mb={2}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Select {...field}>
        {options.map(({ value, label }, idx) => {
          return (
            <option key={idx} value={value}>{label}</option>
          )
        })}
      </Select>
      <ErrorMessage name={field.name} />
    </Box>
  )
}