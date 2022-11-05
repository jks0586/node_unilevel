import React from 'react'
import Container from 'react-bootstrap/Container';
import Header from '../../component/Header';
const Main = React.forwardRef((props, ref) => (
    <Container justify>
    <Header/>
    {props.children}
  
  </Container>
));

export default Main