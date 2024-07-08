import styled from 'styled-components'

export const RegisterContainer = styled.div`
  height: 100vh;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const RegisterSub = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #334155;
  margin: 10px;
`
export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #64748b;
  margin: 10px;
`
export const Input = styled.input`
  height: 40px;
  border: 1px solid #64748b;
  border-radius: 8px;
  width: 100%;
  margin: 10px;
`

export const Select = styled.select`
  height: 40px;
  border: 1px solid #64748b;
  border-radius: 8px;
  width: 100%;
  margin: 10px;
`

export const RegisterBtn = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #ffffff;
  height: 40px;
  width: 150px;
  border-radius: 10px;
  border: 0px solid transparent;
  outline: none;
  cursor: pointer;
  margin: 10px;
  background-color: #2563eb;
`
export const RegisterImage = styled.img`
  height: 250px;
  width: 50%;
`
export const ErrorText = styled.p`
  font-size: 11px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #ff0b37;
`
