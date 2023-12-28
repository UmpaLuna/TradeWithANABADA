import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2.8rem;

  text-align: center;
`;
export const FormButton = styled.button`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #666;

  &:hover {
    border: 1px solid #ffae73;
    background-color: #ffae73;
    transition: all 0.5s;
    color: #fff;
  }
`;
