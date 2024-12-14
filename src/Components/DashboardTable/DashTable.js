import React from 'react';

import {  Row, Col } from 'react-bootstrap';
import { BsThreeDotsVertical } from "react-icons/bs";
import ProjecttableData from './ProjecttableData';

export default function DashTable() {
  const styles = {
    dotstyle: {
        color: "#A0AEC0",
    }

}
  return (
    <div className='table-box'>
    <Row>
        <Col md={12} className='justify-content-between d-flex align-items-center' >
            <h4 className='mb-2'>Projects</h4>
            <a href='' style={styles.dotstyle} ><BsThreeDotsVertical /></a>
        </Col>

    </Row>

          <ProjecttableData/>

       
    

</div>

  )
}
  