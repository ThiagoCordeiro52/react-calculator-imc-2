import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-right: 2.5rem;

  h1 {
    font-size: 2.5rem;
    color: var(--gray-200);
    margin-bottom: 1.2rem;
  }

  p {
    font: 1rem;
    margin-bottom: 2.5rem;
    color: var(--gray-300);
  }

  input {
    width: 100%;
    border: 0;
    border-bottom: 2px solid rgba(150, 163, 171, 0.5);
    border-radius: 0.625rem;
    padding: 0.9375rem 0.5em;
    margin-bottom: 1.25rem;
    font-size: 0.875rem;
    outline: 0;
  }

  button {
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

  button:hover {
    opacity: 0.8;
  }
`;
