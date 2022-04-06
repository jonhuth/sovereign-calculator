import { Box, Button, FormControl, FormLabel, Grid, Heading, Input, Text } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import Banner from "../Banner";
import Footer from "../Footer";

const calculateImpermanentLoss = () => {
  return;
}

const ImpermanentLossForm = () => {
  const initValues = {
    token1: '', 
    token2: '', 
    startDate: null, 
    endDate: null
  }
  const onSubmit = () => {
    calculateImpermanentLoss(); //todo
  };
  return (
    <Formik
      initialValues={initValues}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <Field name='token1'>
            {({ field: any, form: FormControl }) => {
              <FormControl isInvalid={form.errors.token1 && form.touched.token1}>
                <FormLabel htmlFor='token1'>Token 1</FormLabel>
                <Input {...field} id='token1' placeholder='token1' />
              </FormControl>
            }}
          </Field>
          <Button
            mt={4}
            colorScheme='orange'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}

    </Formik>
  );
}

export default ImpermanentLossForm;