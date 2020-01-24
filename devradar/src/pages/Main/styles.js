import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.aside`
  width: 320px;
  background: white;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ListContainer = styled.main`
  flex: 1;
  margin-left: 26px;

  @media (max-width: 1000px) {
    margin-left: 0px;
    margin-top: 30px;
  }
`;
