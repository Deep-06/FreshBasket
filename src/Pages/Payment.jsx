import { Box, Input, Flex, FormLabel, Text, Icon, Button, Heading, useToast, Image, Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'; // Import the CSS for styling
import { BiCreditCardAlt } from 'react-icons/bi';
import { PiContactlessPaymentLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

export const Payment = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const [paid, setPaid] = useState();

  const navigate = useNavigate();
  const toast = useToast();

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const validateForm = () => {
    let isValid = true;

    // Card Number validation
    if (!/^[2-6]\d{15}$/.test(state.number)) {
      toast({
        title: 'Invalid Card Number',
        description: 'Card number should start with a digit between 2 and 6 and have a length of 16 digits.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      isValid = false;
    }
    // ... other validation checks

    
    // Name validation
    else if (!state.name) {
      toast({
        title: 'Name is required',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      isValid = false;
    }

    // Expiry validation
    else if (!/^\d{4}$/.test(state.expiry)) {
      toast({
        title: 'Invalid Expiry Date',
        description: 'Expiry date should be in MM/YY format.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      isValid = false;
    }

    // CVV validation
    else if (!/^\d{3}$/.test(state.cvc)) {
      toast({
        title: 'Invalid CVV',
        description: 'CVV should be a 3-digit number.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      isValid = false;
    }

    return isValid;
  };

  const handlePayment = () => {
    if (validateForm()) {
      // Payment success
      toast({
        title: 'Congratulations',
        description: 'Your booking has been completed successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setPaid(true);
    }
  };

  const navigateHome = () => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  if (paid) {
    navigateHome();
    return (
      <Box>
        <Alert
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='100vh'
        >
          <AlertIcon boxSize='60px' mr={0} />
          <AlertTitle mt={10} mb={5} fontSize='3xl'>
            Congratulations!
          </AlertTitle>
          <AlertDescription maxWidth='md' mt={4}>
            Your booking has been completed successfully.
          </AlertDescription>
        </Alert>
      </Box>
    );
  }

  return (
    // The rest of your UI code
    <Box w="60%" m="auto" mt="30px" mb="30px">
      {/* <Text fontSize="3xl" fontWeight="bold" textAlign="left" mb="50px">
        Payment{' '}
      </Text> */}

      {/* <Flex gap="5%" justifyContent="space-around" direction={['column', 'row']}> */}
      

        <Box p={{ base: '5%', md: '5%' }} w="100%" borderRadius="10px" borderColor='green' boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px'>
          <Text fontSize="xl" fontWeight="bold" textAlign="left">
            Payment Methods{' '}
          </Text>
          <Box justifyContent="left" w={{ base: '100%', md: '30%' }} gap="5%" mt="30px">
            <Icon alignItems="left" cursor={'pointer'} ml={2} w={12} h={12} as={BiCreditCardAlt}></Icon>
            <Icon alignItems="left" cursor={'pointer'} ml={2} w={12} h={12} as={PiContactlessPaymentLight}></Icon>
          </Box>

          <Box>

          <Cards  number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
          </Box>
          
          <form>
            <Box mt="50px">
              <Flex justifyContent="space-between" gap="5%" direction={['column', 'row']}>
                <Box w="100%">
                  <FormLabel fontWeight="bold" mt="10px">
                    Card Number
                  </FormLabel>
                  <Input
                    display="inline"
                    w="100%"
                    borderColor="gray.300"
                    borderWidth="1px"
                    borderRadius="md"
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </Box>
                <Box w="100%">
                  <FormLabel mt="10px">Card Holder Name</FormLabel>
                  <Input
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                    type="text"
                    name="name"
                    placeholder="Cardholder Name"
                    value={state.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </Box>
              </Flex>
            </Box>

            <Box mt="50px">
              <Flex justifyContent="space-between" gap="5%" direction={['column', 'row']}>
                <Box w="100%">
                  <FormLabel mt="10px">Expiry MM/YY</FormLabel>
                  <Input
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                    type="text"
                    name="expiry"
                    placeholder="MM/YY Expiry"
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </Box>
                <Box w="100%">
                  <FormLabel mt="10px">CVV</FormLabel>
                  <Input
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                    type="tel"
                    name="cvc"
                    placeholder="CVV"
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </Box>
              </Flex>
              <Text textAlign="left" fontSize="xs" mt="20px">
                By confirming payment you are approving our <span style={{ color: 'blue' }}>Terms & Conditions</span> and acknowledging our{' '}
                <span style={{ color: 'blue' }}>Privacy Policy</span> Your Payment information and{' '}
              </Text>
              <Box>
                <Flex justifyContent="space-between" direction={['column', 'row']} gap='20px'>
                  <Button
                    mt="30px"
                    loadingText="Submitting"
                    colorScheme="red"
                    variant="outline"
                    w={{ base: '80%', md: '30%' }}
                    borderRadius="20px"
                    h="60px"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </Button>
                  <Button
                    mt="30px"
                    loadingText="Submitting"
                    colorScheme="green"
                    variant="outline"
                    w={{ base: '80%', md: '30%' }}
                    borderRadius="20px"
                    h="60px"
                    onClick={handlePayment}
                  >
                    Pay price 100/-
                  </Button>
                </Flex>
              </Box>
            </Box>
          </form>
        </Box>
      {/* </Flex> */}
    </Box>
  );
};
