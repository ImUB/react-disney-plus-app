import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Nav = () => {

<<<<<<< HEAD
  const [show, setShow] = useState(false);
=======
  const [show, setSetshow] = useState(false);
>>>>>>> 64e734f480202361112373dc4682f1b2a1292d06

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50) {
<<<<<<< HEAD
        setShow(true)
      } else {
        setShow(false)
=======
        setSetshow(true)
      } else {
        setSetshow(false)
>>>>>>> 64e734f480202361112373dc4682f1b2a1292d06
      }
    })
  
    return () => {
      window.removeEventListener('scroll', () => {});
    }
  }, [])
  
  return (
    <NavWrapper show={show}>
      <Logo>
        <img
          alt="Disney Plus Logo"
          src="/images/logo.svg"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>
    </NavWrapper>
  )
}

export default Nav

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props => props.show ? "#090b13" : "transparent"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`