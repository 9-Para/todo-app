import React from "react";
import { Container, Row, Col,Jumbotron } from "react-bootstrap";

const about=()=>{
  return (
   <Container fluid>
     <Row>
       <Col>
         <Jumbotron>
         <h2> The todo app</h2>
        <p>The app has been built with ♥ in React js.</p>
        <p>Creator: Rahul Saini</p>
        <p>Github:<a href="Github.com/9-Para">Github.com/9-Para</a></p>
         </Jumbotron>
       </Col>
     </Row>
   </Container>
  );
};export default about;