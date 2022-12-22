import styled from "styled-components";
import Cascadingss from "../cascadingss/cascadingss";

type wrapper = {
  customWidth?: string;
}

const Wrapper = styled(Cascadingss)<wrapper>`
  width: 100%;
  max-width: ${props => props.customWidth ? props.customWidth : '100%'};
`;

const List = styled(Cascadingss)`
  list-style: none;
`;

const Link = styled(Cascadingss)`
  font-size: 12px;
  color: ${props => props.theme.colors.grayThree};

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.span`
  font-size: 11px;
  color: ${props => props.theme.colors.grayThree};
`;

const Line = styled(Cascadingss)`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.grayTwo};
`;

const LanguageButton = styled.button`
  border: 1px solid ${props => props.theme.colors.grayTwo};
  background-color: ${props => props.theme.colors.grayOne};
  padding: 0px 9px;
  color: ${props => props.theme.colors.grayThree};
  border-radius: 2px;
  font-weight: bold;
`

export {Wrapper, List, Link, Copyright, Line, LanguageButton};
