import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #444;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  width: 100%;
  height: 45px;
  font-size: 16px;
  color: #666;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px 16px;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background: #f05a5b;
  color: white;

  :hover {
    background: #e14f50;
  }
`;
