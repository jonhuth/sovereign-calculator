import { Box, FormLabel, Input, Select } from '@chakra-ui/react';
import { ErrorMessage, useField } from 'formik';

export const SelectInputField = ({ label, data, ...props }: {
  label: string, name: string,
  type: string, data: any[]
}) => {
  const [field] = useField(props);
  return (
    <Box mb={2}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      {/* <Select>
        {data.map((item, idx) => {
          return (
            <option key={idx} value={item.value}>{item.label}</option>
          )
        })}
      </Select> */}
      <Input autoComplete='off' {...field} {...props} />
      <ErrorMessage name={field.name} />
    </Box>
  )
}