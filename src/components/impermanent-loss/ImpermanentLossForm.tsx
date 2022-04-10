import { Box, Button } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { NumericField } from "../general/forms/NumericField";
import { TextField } from "../general/forms/TextField";
import { calculateImpermanentLoss } from './helpers';




const ImpermanentLossForm = () => {
  const onSubmit = () => {
    console.log('submitted!')
    // calculateImpermanentLoss(token1, token2, startDate, endDate, positionSize); //todo
  };
  return (
    <Formik
      initialValues={{
        token1: '',
        token2: '',
        startDate: '',
        endDate: '',
        positionSize: 0
      }}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Box>
          {console.log(props.values)}
          <Form>
            <TextField label='Token 1' name='token1' type='text' />
            <TextField label='Token 2' name='token2' type='text' />
            <TextField label='Start Date' name='startDate' type='date' />
            <TextField label='End Date' name='endDate' type='date' />
            <NumericField label='Position Size' name='positionSize' type='number' />
            <Button
              mt={4}
              colorScheme='orange'
              isLoading={props.isSubmitting}
              type='submit'
              onSubmit={onSubmit}
            >
              Submit
            </Button>
          </Form>
        </Box>
      )}

    </Formik>
  );
}

export default ImpermanentLossForm;