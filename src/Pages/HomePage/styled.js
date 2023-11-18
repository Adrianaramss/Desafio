import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Arial', sans-serif;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)
`;

export const Title = styled.h1`
  color: white;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  margin-right: 30px;
  color: white;

`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  margin-left: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const Result = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: white;
`;
