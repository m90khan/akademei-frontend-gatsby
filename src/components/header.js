import React from 'react';
import Link from 'gatsby-link';
// import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import { logoCode } from './../images';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = (props) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  const handlePurchase = (token) => {
    const amount = 5000;
    const description = 'My awesome product';

    // const bodyObject = {
    //   tokenId: token.id,
    //   email: token.email,
    //   name: token.name,
    //   description,
    //   amount,
    // }

    // fetch('http://localhost:9000/stripe-charge', {
    //   method: 'POST',
    //   body: JSON.stringify(bodyObject),
    // })
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Head>
      <div className={hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className='HeaderGroup'>
          <Link to='/'>
            <img src={logoCode} width='30' />
          </Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/downloads'>Downloads</Link>
          <Link to='/workshops'>Workshops</Link>
          {/* <StripeCheckout
            amount={5000}
            image="https://cl.ly/0K2f1V3K3h0D/download/Logo.jpg"
            token={this.handlePurchase}
            stripeKey={'pk_test_4VuxMZhOiYXJlElaTf3qjAXh'}
          >
            <button>Buy</button>
          </StripeCheckout> */}
        </div>
      </div>
    </Head>
  );
};

const Head = styled.div`
  .Header {
    position: fixed;
    width: 100%;
    padding: 50px 0;
    z-index: 100;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .HeaderScrolled {
    background: rgba(0, 0, 0, 0.8);
    padding: 15px 0;
    backdrop-filter: blur(20px);
  }

  .HeaderGroup {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, auto);
    align-items: center;
    justify-items: center;
  }

  .Header a {
    color: white;
    font-weight: 700;
  }

  .Header button {
    padding: 8px 20px;
    font-size: 20px;
    background: #56ccf2;
    border: none;
    font-weight: 700;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .Header button:hover {
    background: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }

  @media (max-width: 640px) {
    .Header {
      padding: 15px 0;
    }

    .HeaderGroup {
      grid-template-columns: repeat(4, auto);
    }

    .Header a:nth-child(4) {
      display: none;
    }
  }
`;

export default Header;
