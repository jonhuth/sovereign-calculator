import { Button } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { calculateImpermanentLoss } from './helpers';



const ImpermanentLossForm = () => {
  const initValues = {
    token1: '',
    token2: '',
    startDate: null,
    endDate: null,
    positionSize: null
  }
  const onSubmit = () => {
    // calculateImpermanentLoss(token1, token2, startDate, endDate); //todo
  };
  return (
    <Formik
      initialValues={initValues}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <Field name='token1'>
            {/* {({ field, form }) => {
              <FormControl isInvalid={form.errors.token1 && form.touched.token1}>
                <FormLabel htmlFor='token1'>Token 1</FormLabel>
                <Input {...field} id='token1' placeholder='token1' />
              </FormControl>
            }} */}
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