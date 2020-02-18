import styled from 'styled-components';
import logo from '~/assets/logo.svg';

export const Container = styled.div`
  margin: 80px auto;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: 'AirCnC',
})``;

export const Content = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;
`;
