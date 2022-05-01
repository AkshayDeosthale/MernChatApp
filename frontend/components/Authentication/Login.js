import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setpassword] = useState("");

  const [show, setshow] = useState(false);

  const postDetail = (pics) => {};
  const submitHandler = () => {};
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing="5px"
      align="stretch"
      color="black"
    >
      <FormControl id="first-name" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="Password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your name"
            onChange={(e) => setpassword(e.target.value)}
          />
          <InputRightElement w="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setshow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        w="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign in
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        w="100%"
        style={{ marginTop: 15 }}
        onClick={() => {
          setEmail("guest@chatApp.com");
          setpassword("123456");
        }}
      >
        Get guest user credentials
      </Button>
    </VStack>
  );
};

export default Login;
