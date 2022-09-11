import styled from 'styled-components';

interface ContainerProps {
  background: string;
}

export const Container = styled.div<ContainerProps>`
  flex: 1;
  background-color: var(${(props) => props.background});
  color: var(--white);
  border-radius: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  padding: 1.25rem;
`;

export const GridIcon = styled.div`
  border-radius: 50%;
  width: 4.375rem;
  height: 4.375rem;
  background-color: rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 1.875rem;
  }
`;
export const GridTitle = styled.div`
  font-size: 1.4375rem;
  font-weight: bold;
  margin-top: 0.3125rem;
`;
export const GridInfo = styled.div`
  font-size: 0.8rem;
  margin-top: 0.875rem;
`;
