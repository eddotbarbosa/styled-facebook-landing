import styled from "styled-components";
import Cascadingss from "../../components/cascadingss/cascadingss";

const MainWrapper = styled(Cascadingss)`
  height: 74vh;
`;

const FooterWrapper = styled(Cascadingss)`
  height: 26vh;
  background-color: ${props => props.theme.colors.whiteOne};
`;

const FacebookLogo = styled.div`
  & img {
    margin-left: -28px;
    margin-bottom: -14px;
    width: 301px;
  }
`

const FBBrandWrapper = styled(Cascadingss)`
  max-width: 580px;
  width: 100%;
  padding-bottom: 128px;
`;

const Header = styled.h2`
  max-width: 500px;
  font-size: 28px;
  font-weight: normal;
`;

export {MainWrapper, FacebookLogo, Header, FBBrandWrapper, FooterWrapper}
