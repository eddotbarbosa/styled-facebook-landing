import Cascadingss from "../cascadingss/cascadingss";

import {Wrapper, SignInCard, FormInput, Button, ForgotPassword, Line, NewAccountButton,CreatePageText, CreatePageLink } from "./signIn.styles";

const SignIn = function () {
  return (
    <Wrapper flexDirection="col" alignItems="center">
      <SignInCard flexDirection="col" w="12/12" alignItems="center" mb="lg">
        <Cascadingss as="form" flexDirection="col" w="11/12" mb="sm" mt="md">
          <FormInput as="input" type="text" name="" id="" mb="sm" placeholder="Email or phone number" />
          <FormInput as="input" type="text" name="" id="" mb="sm" placeholder="Password" />
          <Button type="button" value="Log In" />
        </Cascadingss>
        <ForgotPassword>Forgot password?</ForgotPassword>
        <Line />
        <NewAccountButton>Create new account</NewAccountButton>
      </SignInCard>
      <div>
        <CreatePageText><CreatePageLink>Create a Page</CreatePageLink> for a celebrity, brand or business.</CreatePageText>
      </div>
    </Wrapper>
  );
};

export {SignIn};
