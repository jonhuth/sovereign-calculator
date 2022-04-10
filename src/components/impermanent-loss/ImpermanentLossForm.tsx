import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputField } from "../general/forms/InputField";
import { calculateImpermanentLoss } from './helpers';

interface ILFormFields {
  token1: string,
  token2: string,
  startDate: string,
  endDate: string,
  positionSize: number
}


const ImpermanentLossForm = () => {
  const onSubmit = ({ token1, token2, startDate, endDate, positionSize }: ILFormFields) => {
    console.log('submitted!')
    calculateImpermanentLoss(token1, token2, new Date(startDate),
      new Date(endDate), positionSize); //todo
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
            <InputField label='Token 1' name='token1' type='text' />
            <InputField label='Token 2' name='token2' type='text' />
            <InputField label='Start Date' name='startDate' type='date' />
            <InputField label='End Date' name='endDate' type='date' />
            <InputField label='Position Size' name='positionSize' type='number' />
            <Button
              mt={4}
              colorScheme='orange'
              isLoading={props.isSubmitting}
              type='submit'
              onSubmit={onSubmit(props.values)}
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