import styled from '@emotion/styled';

export const Form = styled.form`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;

`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 5px 10px;
  width: 95%;
  font-size: 24px;
  color: gray;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  box-shadow: inset -2px -2px 5px #ffffff, inset 3px 3px 5px rgba(0, 0, 0, 0.1);
`;



export const Btn = styled.button`
  padding: 10px 25px;
  font-size: 24px;
  font-weight: 500;
  color: #6a9bd8;
  background-color: transparent;
  border-radius: 5px;
  border:none;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    color: #fff;
    background-color: #6a9bd8;
  }
`;
