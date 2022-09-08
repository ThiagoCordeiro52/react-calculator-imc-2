import styled from 'styled-components';

export const Container = styled.div``;
export const Header = styled.header`
  max-width: 56.25rem;
  margin: 2.5rem auto;

  img {
    width: 9.37rem;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  max-width: 56.25rem;
  margin: auto;

  .leftSide {
    flex: 1;
    margin-right: 2.5rem;
  }

  .rightSide {
    flex: 1;
    margin-left: 2.5rem;
  }
`;
