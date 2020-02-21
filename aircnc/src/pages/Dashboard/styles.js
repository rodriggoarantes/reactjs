import styled from 'styled-components';

export const Lista = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Thumb = styled.div`
  width: 100%;
  height: 120px;
  background-image: url(${props => (props.url ? props.url : '')});
  background-size: cover;
  border-radius: 4px;
`;

export const Name = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  & > strong {
    color: #444;
    font-size: 24px;
  }

  & > span {
    color: #bbb;
    font-size: 12px;
    line-height: 16px;
    font-weight: 100;
  }
`;

export const Price = styled.span`
  font-size: 15px;
  color: #999;
  margin-top: 6px;
`;
