import styled, { keyframes, css } from 'styled-components';

import { Label, Button } from '~/components/Form';

export const File = styled.input.attrs({
  type: 'file',
})`
  display: none;
`;

export const Camera = styled.img``;

export const FileContainer = styled(Label)`
  margin-top: 20px;
  cursor: pointer;
  height: 160px;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  border: ${props => (props.background ? '' : '1px dashed #ddd')};
  background-image: ${props =>
    props.background ? `url(${props.background})` : 'none'};

  > ${Camera} {
    display: ${props => (props.background ? 'none' : 'flex')};
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled(Button).attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
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
