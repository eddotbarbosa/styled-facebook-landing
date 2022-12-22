import styled from "styled-components";
import Cascadingss from "../cascadingss/cascadingss";

import {Wrapper, List, Link, Line, Copyright, LanguageButton} from "./footer.styles";


const Footer = function () {
  return (
    <Wrapper flexDirection="col" pl="md" pr="md" customWidth="980px">
      <Cascadingss display="block" mt="lg">
        <List as="ul" flexWrap="wrap">
          <li>
            <Link as="a" href="#" mr="md" mb="xs">English (US)</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Português (Brasil)</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Español</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Français (France)</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Italiano</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Deutsch</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">العربية</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">हिन्दी</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">中文(简体)</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">日本語</Link>
          </li>
          <li>
            <LanguageButton as="a" href="#">+</LanguageButton>
          </li>
        </List>
      </Cascadingss>
      <Line mb="sm" />
      <Cascadingss display="block" mb="sm">
        <List flexWrap="wrap">
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Sign Up</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Log In</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Messenger</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Facebook Lite</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Watch</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Places</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Games</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Marketplace</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Meta Pay</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Oculus</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Portal</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Instagram</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Bulletin</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Fundraisers</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Services</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Voting Information Center</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Privacy Policy</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Privacy Center</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Groups</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">About</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Create Ad</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Create Page</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Developers</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Careers</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Cookies</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Ad choices</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Terms</Link>
          </li>
          <li>
            <Link as="a" href="#" mr="md" mb="xs">Help</Link>
          </li>
          <li>
            <Link as="a" href="#">Contact Uploading & Non-UsersSettings</Link>
          </li>
        </List>
      </Cascadingss>
      <Cascadingss mb="lg">
        <Copyright>Meta © 2022</Copyright>
      </Cascadingss>
    </Wrapper>
  );
};

export {Footer};
