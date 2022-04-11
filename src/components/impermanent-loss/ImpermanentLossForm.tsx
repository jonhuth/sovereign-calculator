import { Box, SimpleGrid } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import { InputField } from "../general/forms/InputField";
import { SubmitButton } from "../general/SubmitButton";
import { calculateImpermanentLoss } from './helpers';

interface ILFields {
  token1: string,
  token2: string,
  startDate: string,
  endDate: string,
  positionSize: number
}


const ImpermanentLossForm = () => {
  const [impermanentLoss, setImpermanentLoss] = useState({ rel: '', abs: '' });

  const validate = Yup.object({
    token1: Yup.string()
      .required('Field is required'),
    token2: Yup.string()
      .required('Field is required'),
    startDate: Yup.date()
      .required('Field is required'),
    endDate: Yup.date()
      .required('Field is required')
      .min(Yup.ref('startDate'), 'End date must come after start date')
      .max(new Date(), 'End date cannot be in the future'),
    positionSize: Yup.number()
      .min(0, 'Must be non-negative')
      .max((2 ** 64) - 1, 'Value too big')
      .required('Field is required'),

  });

  // todo: abstract into prop
  const initialValues: ILFields = {
    token1: '',
    token2: '',
    startDate: '',
    endDate: '',
    positionSize: 100000
  };

  // todo: abstract into prop
  const onSubmit = async (values: ILFields, actions: any) => {
    const { rel, abs } = await calculateImpermanentLoss(values.token1, values.token2, new Date(values.startDate),
      new Date(values.endDate), values.positionSize);
    setImpermanentLoss({ rel, abs });
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Box>
          {/* {console.log(props.values)} */}
          <Form onSubmit={props.handleSubmit}>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} justifySelf='center'>
              <InputField label='Token 1' name='token1' type='text' />
              <InputField label='Token 2' name='token2' type='text' />
              <InputField label='Start Date' name='startDate' type='date' />
              <InputField label='End Date' name='endDate' type='date' />
              <InputField label='Position Size' name='positionSize' type='number' />
            </SimpleGrid>
            <SubmitButton isSubmitting={props.isSubmitting} />
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