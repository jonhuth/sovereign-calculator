import { Button } from '@chakra-ui/react';

export const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
	return (
		<Button
			mt={4}
			colorScheme='orange'
			isLoading={isSubmitting}
			type='submit'>Submit</Button>
	)
}
