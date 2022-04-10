import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputField } from "../general/forms/InputField";
import { calculateImpermanentLoss } from './helpers';

interface ILFields {
  token1: string,
  token2: string,
  startDate: string,
  endDate: string,
  positionSize: number
}


const ImpermanentLossForm = () => {
  const initialValues: ILFields = {
    token1: '',
    token2: '',
    startDate: '',
    endDate: '',
    positionSize: 0
  }
  const onSubmit = (values: ILFields, actions: any) => {
    calculateImpermanentLoss(values.token1, values.token2, new Date(values.startDate),
      new Date(values.endDate), values.positionSize);
    actions.setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Box>
          {/* {console.log(props.values)} */}
          <Form onSubmit={props.handleSubmit}>
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