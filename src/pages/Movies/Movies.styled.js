import styled from '@emotion/styled';

// COMMON STYLE

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  width: 300px;
  border: 1px solid #0fa39c;
  border-radius: 5px;
  height: 20px;
  padding: 2px 6px;
  :focus {
    outline: 0.5px solid #0fa39c;
  }
`;
export const Button = styled.button`
  margin-left: 10px;
  height: 27px;
  width: 80px;
  border: 1px solid #0fa39c;
  border-radius: 5px;
  background-color: #81f3ee;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #2debe2;
  }
`;
