import { Box, SimpleGrid } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from 'react';
import * as Yup from 'yup';
import { InputField } from "../general/forms/InputField";
import { SubmitButton } from "../general/SubmitButton";
import { calculateFeeDrag } from './helpers';

interface FeeDragFields {
  initInvestment: number,
  annualFee: number,
  annualRateOfReturn: number,
  holdingPeriod: number,
}



const FeeDragForm = () => {
  const [stats, setStats] = useState({
    fvFees: '',
    fvNoFees: '',
    fees: {
      abs: '',
      rel: ''
    }
  });

  const validate = Yup.object({
    initInvestment: Yup.number()
      .required('Field is required'),
    annualFee: Yup.number()
      .required('Field is required'),
    annualRateOfReturn: Yup.number()
      .required('Field is required'),
    holdingPeriod: Yup.number()
      .required('Field is required'),
  });

  const initialValues: FeeDragFields = {
    initInvestment: 1000000,
    annualFee: .01,
    annualRateOfReturn: .07,
    holdingPeriod: 10
  };

  const onSubmit = (values: FeeDragFields, actions: any) => {
    const {initInvestment, annualFee, annualRateOfReturn, holdingPeriod} = values;
    const res = calculateFeeDrag(initInvestment, annualFee, annualRateOfReturn, holdingPeriod);
    setStats(res);
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
          <Form onSubmit={props.handleSubmit}>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} justifySelf='center'>
              <InputField label='Initial Investment' name='initInvestment' type='number' />
              <InputField label='Annual Fee (decimal)' name='annualFee' type='number' />
              <InputField label='Annual Rate of Return (decimal)' name='annualRateOfReturn' type='number' />
              <InputField label='Number of Years Held' name='holdingPeriod' type='number' />
            </SimpleGrid>
            <SubmitButton isSubmitting={props.isSubmitting} />
          </Form>
          <Box my={4}>
            Future value w/o fees: {stats.fvNoFees}
          </Box>
          <Box my={4}>
            Future value w/ fees: {stats.fvFees}
          </Box>
          <Box my={4}>
            Total Fees: {stats.fees.abs}
          </Box>
          <Box my={4}>
            % Loss to fees: {stats.fees.rel}
          </Box>
        </Box>
      )}
    </Formik>
  );
}

export default FeeDragForm;