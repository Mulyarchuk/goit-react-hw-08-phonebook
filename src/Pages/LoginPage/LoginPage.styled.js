import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Box = styled.div`
  width: 500px;
  height: 468px;
  margin: 0 auto;
  background-color: trasparent;
  padding: 40px 65px 60px;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    width: 320px;
    height: 568px;
    padding: 107px 20px;
    border-radius: 0px;
  }
`;

export const Input = styled.input`
  width: 410px;
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
  height: 34px;
  padding-left: 55px;
  padding-right: 55px;
  font-size: 18px;
  line-height: 27px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 0.5px, solid;
  border-color: #e7eaf2;
  :focus {
    border-color: #0396FF;
  }
  ::placeholder {
    color: #e7eaf2;
  }
  @media screen and (max-width: 768px) {
    width: 280px;
    height: 32px;
  }
`;

export const InputIcon = styled.svg`
  position: absolute;
  left: 10px;
  top: 25px;
`;

export const ShowIcon = styled.span`
position: absolute;
right: 10px;
top: 25px;
color: #fff;
`

export const AuthLabel = styled.label`
  position: relative;
  width: max-content;
  display: block;
`;

export const LogBtn = styled.button`
  display: block;
  width: 300px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.1em;
  background-color: #24cca7;
  border-color: transparent;
  outline: none;
  color: white;
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  :hover,
  :focus {
    border: 1px solid #24cca7;
    color: #24cca7;
    background-color: #ffffff;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (max-width: 768px) {
    width: 280px;
  }
`;

export const RegBtn = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.1em;
  background-color: #fff;
  color: #4a56e2;
  border: 1px solid #4a56e2;
  :hover,
  :focus {
    color: #fff;
    background-color: #4a56e2;
    border: 1px solid #4a56e2;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (max-width: 768px) {
    width: 280px;
  }
`;

export const Form = styled.form`
  margin-left: 65px;
  margin-right: 65px;
`;

export const AuthForm = styled.form`
  // width: 540px;
  // height: auto;
  margin-top: 60px;
  margin-bottom: 62px;
  margin-right: auto;
  margin-left: auto;
`;