import { Box } from '@chakra-ui/react';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';
import { useField } from 'formik';

export interface Option {
  label: string;
  value: string;
}

export const TypeaheadField = ({ label, name }: { label: string, name: string }) => {
  // const [field] = useField();
  return (
    <Box mb={2}>
      {/* <CUIAutoComplete
        label='Choose 2 tokens'
        placeholder='Enter a token name'
        onCreateItem={handle}
      /> */}
    </Box>
  )
}
