import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  padding: 20px;
`
export const FormContainer = styled.form`
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  gap: 10px;
  box-shadow: ${props => (props.isDark ? 'none' : '1px 2px 2px 1px #d7dfe9')};
`

export const LoginImage = styled.img`
  width: 80px;
  align-self: center;
`

export const InputContainer = styled.div`
  width: 100%;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.8;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const Input = styled.input`
  width: 100%;
  cursor: pointer;
  outline: none;
  padding: 5px;
  border-style: none;
  background-color: transparent;
  border: 1px solid #475569;
  border-radius: 5px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const LoginButton = styled.button`
  cursor: pointer;
  outline: none;
  border-style: none;
  border-radius: 5px;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Robot0';
  padding-top: 10px;
  padding-bottom: 10px;
`
export const ErrorMassage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 10px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CheckBox = styled.input``
export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
