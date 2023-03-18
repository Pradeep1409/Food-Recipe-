import { HStack, Input, Stack } from '@chakra-ui/react';
import React from 'react';
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
} from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <Stack>
        <HStack p={50} display={'Flex'} justifyContent={'center'} >
          <FormControl width={1000}>
            <FormLabel fontWeight={700}>Enter the Name of Food Recipe</FormLabel>
            <Input  border='2px' borderColor='Blue.600'  type="text"  />
          </FormControl>
        </HStack>
      </Stack>
    </div>
  );
};

export default Home;
