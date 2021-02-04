import React, { useState } from 'react';
import styled from 'styled-components';
import footerData from '../../footerData.js';

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 4rem 0;
  display: grid;
  grid-gap: 20px;
  text-align: center;
`;
const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
`;
const Button = styled.button`
  background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`;
const LinkGroup = styled.div`
  width: 60%;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  text-align: left;
  a {
    transition: 0.8s;
  }
  a:hover {
    color: black;
  }
`;

const Copyright = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Links = ({ link }) => {
  console.log(link);
  return link.map((item) => <a style={{ display: 'block' }}>{item.name}</a>);
};
const Footer = ({ children }) => {
  const [links, setLinks] = useState(footerData);

  return (
    <FooterGroup>
      <Text>
        Tweet “TypeScript will take over development cycle be it anything in future @Khan”
      </Text>
      <Button>Tweet</Button>
      <LinkGroup>
        {links &&
          links.map((item, i) => (
            <div key={i}>
              <h4 href=''>{item.title}</h4>
              <Links link={item.links} />
            </div>
          ))}
      </LinkGroup>
      <Copyright>{children}</Copyright>
    </FooterGroup>
  );
};

export default Footer;
