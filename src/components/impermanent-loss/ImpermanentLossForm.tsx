import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
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
  const [impermanentLoss, setImpermanentLoss] = useState({ rel: '', abs: ''});
  const initialValues: ILFields = {
    token1: '',
    token2: '',
    startDate: '',
    endDate: '',
    positionSize: 100000
  }
  const onSubmit = async (values: ILFields, actions: any) => {
    const {rel, abs} = await calculateImpermanentLoss(values.token1, values.token2, new Date(values.startDate),
      new Date(values.endDate), values.positionSize);
    setImpermanentLoss({rel, abs});
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
            <SimpleGrid columns={{ sm: 1, md: 2}} spacing={5} justifySelf='center'>
              <InputField label='Token 1' name='token1' type='text' />
              <InputField label='Token 2' name='token2' type='text' />
              <InputField label='Start Date' name='startDate' type='date' />
              <InputField label='End Date' name='endDate' type='date' />
              <InputField label='Position Size' name='positionSize' type='number' />
            </SimpleGrid>
            <Button
              mt={4}
              colorScheme='orange'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
          </Form>
          <Box mt={4} mb={2}>
            Impermanent Loss: {impermanentLoss.abs}
          </Box>
          <Box>
            Impermanent Loss (%): {impermanentLoss.rel}
          </Box>
        </Box>
      )}
    </Formik>
  );
}

export default ImpermanentLossForm;