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

  .leftSide h1 {
    font-size: 2.5rem;
    color: var(--gray-200);
    margin-bottom: 1.2rem;
  }

  .leftSide p {
    font: 1rem;
    margin-bottom: 2.5rem;
    color: var(--gray-100);
  }

  .leftSide input {
    width: 100%;
    border: 0;
    border-bottom: 2px solid rgba(150, 163, 171, 0.5);
    padding: 0.625rem 0.125rem;
    margin-bottom: 1.25rem;
    font-size: 0.875rem;
    outline: 0;
  }

  .leftSide button {
    background-color: var(--blue);
    color: var(--white);
    font-size: 0.9375rem;
    border: 0;
    border-radius: 0.625rem;
    padding: 0.9375rem 0;
    width: 100%;
    cursor: pointer;
    margin-top: 2.5rem;
    transition: all ease 0.3s;
  }

  .leftSide button:hover {
    opacity: 0.8;
  }

  .rightSide {
    flex: 1;
    margin-left: 2.5rem;
  }
`;
