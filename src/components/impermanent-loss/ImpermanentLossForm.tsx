import { Box, SimpleGrid } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { InputField } from "../general/forms/InputField";
import { SelectInputField } from "../general/forms/SelectInputField";
import { SubmitButton } from "../general/SubmitButton";
import { getTokens } from "./coin-gecko.service";
import { calculateImpermanentLoss } from './helpers';

interface ILFields {
  token1: string,
  token2: string,
  startDate: string,
  endDate: string,
  positionSize: number,
  lpFeeRate: number
}

const ImpermanentLossForm = () => {

  const [tokenOpts, setTokenOpts] = useState([]);

  useEffect(() => {
    async function getTokenOpts() {
      const tokenOpts = await getTokens();
      setTokenOpts(tokenOpts);
    }
    getTokenOpts();
  }, []);

  const [stats, setStats] = useState({
    il: { rel: '', abs: '' },
    netIl: { rel: '', abs: '' },
    hodl: { rel: '', abs: '' },
    lp: { rel: '', abs: '' }
  });

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
    lpFeeRate: Yup.number()
      .min(0, 'Must be non-negative')
      .max((2 ** 64) - 1, 'Value too big')
      .required('Field is required'),

  });

  const initialValues: ILFields = {
    token1: 'ethereum',
    token2: 'rocket-pool',
    startDate: '2021-04-10',
    endDate: '2022-04-10',
    positionSize: 100000,
    lpFeeRate: 0
  };

  const onSubmit = async (values: ILFields, actions: any) => {
    const res = await calculateImpermanentLoss(values.token1, values.token2, new Date(values.startDate),
      new Date(values.endDate), values.positionSize, values.lpFeeRate);
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
              <SelectInputField label='Token 1' name='token1' options={tokenOpts} />
              <SelectInputField label='Token 2' name='token2' options={tokenOpts} />
              <InputField label='Start Date' name='startDate' type='date' />
              <InputField label='End Date' name='endDate' type='date' />
              <InputField label='Position Size' name='positionSize' type='number' />
              <InputField label='Yield From Fees (decimal)' name='lpFeeRate' type='number' />
            </SimpleGrid>
            <SubmitButton isSubmitting={props.isSubmitting} />
          </Form>
          <Box my={4}>
            LP Net Change: {stats.lp.abs} {stats.lp.rel ? `(${stats.lp.rel})` : ''}
          </Box>
          <Box my={4}>
            HODL Net Change: {stats.hodl.abs} {stats.hodl.rel ? `(${stats.hodl.rel})` : ''}
          </Box>
          <Box my={4}>
            Impermanent Loss: {stats.il.abs} {stats.il.rel ? `(${stats.il.rel})` : ''}
          </Box>
          <Box my={4}>
            Impermanent Loss After Fees: {stats.netIl.abs} {stats.netIl.rel ? `(${stats.netIl.rel})` : ''}
          </Box>
        </Box>
      )}
    </Formik>
  );
}

export default ImpermanentLossForm;