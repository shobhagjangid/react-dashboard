import React from 'react';
import { Table } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Usericon2 from '../../Assets/user2.png';
import Usericon4 from '../../Assets/user4.png';
import Usericon5 from '../../Assets/user5.png';

import icon1 from '../../Assets/Adobe_XD_CC_icon 1.png';
import icon2 from '../../Assets/spotify.png';
import icon3 from '../../Assets/bit.png';
import icon4 from '../../Assets/invision.png';
import icon5 from '../../Assets/Icon.png';
import icon6 from '../../Assets/fix.png';

export default function ProjectTable2() {
    const tabData = [
        {
          title: "Chakra Soft UI Version",
          value: "$53,000",
          budget: "$14,000",
          completion: 70,
          isPositive: true,
          icon: Usericon5 ,
          iconnew: icon1,
          Status: 'Working',
        },
        {
          title: "Add Progress Track",
          value: "$120,000",
          budget: "$3,000",
          completion: 10,
          isPositive: true,
          icon: Usericon2 ,
          iconnew: icon2,
          Status: 'Canceled',
        },
        {
            title: "Fix Platform Errors",
            value: "$1200,000",
            budget: "Not set",
            completion: 100,
            isPositive: true,
           icon: Usericon2 ,
           iconnew: icon3,
           Status: 'Done',
        },
    
        {
            title: "Launch our Mobile App",
            value: "$1200,000",
            budget: "$32,000",
            completion: 100,
            isPositive: true,
           icon: Usericon4 ,
           iconnew: icon4,
           Status: 'Done',
        },
    
        {
            title: "Add the New Pricing Page",
            value: "$1200,000",
            budget: "$400",
            completion: 25,
            isPositive: true,
           icon: Usericon5 ,
           iconnew: icon5,
           Status: 'Working',
        },
    
        {
            title: "Redesign New Online Shop",
            value: "$1200,000",
            budget: "$7,600",
            completion: 40,
            isPositive: true,
           icon: Usericon2 ,
           iconnew: icon6,
           Status: 'Working',
        },
      ];
  return (
    <Table hover>
    <thead>
        <tr>
            <th>COMPANIES</th>
            <th>BUDGET</th>
            <th>STATUS</th>
           
            <th>COMPLETION</th>
        </tr>
    </thead>
  
  <tbody>
    {tabData.map((td, index) => (
      <tr key={index}>
       
        <td><img src={td.iconnew} className='img-fluid' alt={td.title}/> &nbsp; {td.title}</td>
        <td> {td.budget}</td>
        <td>{td.Status}</td>
        <td>
            {td.completion}%
            <ProgressBar now={td.completion} label={`${td.completion}%`} visuallyHidden />
            </td>
      </tr>
    ))}
  </tbody>
  </Table>
  )
}
