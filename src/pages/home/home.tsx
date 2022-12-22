import {SignIn} from "../../components/signIn/signIn";
import {Footer} from "../../components/footer/footer";

import {FBBrandWrapper, FacebookLogo,Header, MainWrapper, FooterWrapper} from "./home.styles";

import facebookLogo from '../../assets/images/facebook-logo.svg';



const Home = function () {
  return (
    <main>
      <MainWrapper justifyContent="center" alignItems="center">
        <FBBrandWrapper flexDirection="col" pr="lg" displayLg="hidden">
          <FacebookLogo>
            <img src={facebookLogo} alt="facebook logo" />
          </FacebookLogo>
          <div>
            <Header>Connect with friends and the world around you on Facebook.</Header>
          </div>
        </FBBrandWrapper>
        <SignIn />
      </MainWrapper>
      <FooterWrapper justifyContent="center">
        <Footer />
      </FooterWrapper>
    </main>
  );
};

export {Home};
