import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  list-style: none;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li``;
