import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div``;
export const Titulo = styled.strong`
  font-size: 20px;
  text-align: center;
  display: block;
  color: #333;
`;
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  .input-block + .input-block {
    margin-top: 20px;
  }

  .input-group {
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  .input-group .input-block {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  color: #acacac;
  font-size: 14px;
  font-weight: bold;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-radius: 4px;
  border-bottom: 1px solid #eee;
  padding: 6px 10px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const Submit = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #7d40e7;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: background 0.5s;

  &:hover {
    background: #6931ca;
  }

  svg {
    margin: -1px 4px 0 0;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
