import styled from "styled-components";

export const Item = styled.li`
background-color: rgba(183, 212, 226, 0.44);
 border: thick double #a7d8ff;
border-radius: 30px;
  padding: 16px;
  box-shadow: 10px 5px 5px rgba(30, 58, 138, 0.1);
display: flex;
flex-direction: column;
gap: 10px;
align-items: start;
width: 350px;
`
export const Text = styled.p`
  font-family: 'Georgia', serif;
  font-size: 18px;
  color: #2c3e50;
  text-shadow: 1px 1px 2px #bdc3c7;
  line-height: 1.6;
  letter-spacing: 0.5px;
  margin:0;
`
export const TextRainbow = styled.p`
 font-size: 26px;
  color: #ffffff;
  background: linear-gradient(to bottom,rgb(227, 221, 240) 0%,rgb(80, 98, 144) 50%,rgb(21, 53, 230) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
`
export const SmallList = styled.ul`
flex-direction: column;
display: flex;
flex-wrap: wrap;
list-style: none;
align-items: start;
padding: 0;
`
export const  SmallListItem = styled.li`
display: flex;
align-items: center;
gap:10px;
`
