import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-left: 2.5rem;
  display: flex;

  & > div {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;
