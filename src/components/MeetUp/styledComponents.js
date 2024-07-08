import styled from 'styled-components'

export const MeetUpContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.name === false ? '#2563eb' : '#334155')};
`
export const Paragraph = styled.p`
  font-size: ${props => (props.topic === false ? '21px' : '18px')};
  font-weight: ${props => (props.topic === false ? 'bold' : '400')};
  font-family: 'Roboto';
  color: ${props => (props.topic === false ? ' #334155' : '#64748b')};
`
export const RegisterBtn = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #ffffff;
  height: 40px;
  width: 100px;
  border-radius: 10px;
  border: 0px solid transparent;
  outline: none;
  cursor: pointer;
  background-color: #2563eb;
`
export const RegisterImage = styled.img`
  height: 250px;
  width: 50%;
`
