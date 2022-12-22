import styled from "styled-components";
import Cascadingss from "../cascadingss/cascadingss";

const Wrapper = styled(Cascadingss)`
  max-width: 396px;
  width: 100%;
`;

const SignInCard = styled(Cascadingss)`
  background-color: ${props => props.theme.colors.whiteOne};
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  border-radius: 6px;
`;

const FormInput = styled(Cascadingss)`
  height: 52px;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.grayTwo};
  padding-left: 16px;
  font-size: 16px;

  &::placeholder {
    color: ${props => props.theme.colors.blackOne};
  }

  &:focus {
    outline: 1px solid ${props => props.theme.colors.blueOne};
  }
`;

const Button = styled.input`
  height: 52px;
  font-size: 20px;
  color: ${props => props.theme.colors.whiteOne};
  background-color: ${props => props.theme.colors.blueOne};
  font-weight: bold;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.blueTwo};
  }
`;

const ForgotPassword = styled.a`
  font-weight: medium;
  border: none;
  background: none;
  color: ${props => props.theme.colors.blueOne};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Line = styled.div`
  width: 91.666667%;
  height: 1px;
  margin: 20px 0px;
  background-color: ${props => props.theme.colors.grayTwo};
`;

const NewAccountButton = styled.button`
  font-size: 17px;
  padding: 16px 24px;
  color: ${props => props.theme.colors.whiteOne};
  background-color: ${props => props.theme.colors.greenOne};
  font-weight: bold;
  border-radius: 6px;
  border: none;
  margin-bottom: 24px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.greenTwo};
  }
`;

const CreatePageText = styled.span`
  font-size: 14px;
`;

const CreatePageLink = styled.a`
  font-weight: bold;
  border: none;
  background: none;
  color: ${props => props.theme.colors.blackOne};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export {Wrapper, SignInCard, FormInput, Button, ForgotPassword, Line, NewAccountButton, CreatePageText, CreatePageLink};
