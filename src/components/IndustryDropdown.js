// IndustryDropdown.js
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './IndustryDropdown.css'; // Import the CSS file

const IndustryDropdown = () => {
  const industryOptions = [
    'Automotive',
    'Banking and Finance',
    'Construction',
    'Education',
    'Food and Beverage',
    'Healthcare',
    'Legal Services',
    'Manufacturing',
    'Travel and Tourism',
    'Pharmaceutical',
    'Supply Chain and Logistics',
  ];

  return (
    <Dropdown className="custom-dropdown">
      <Dropdown.Toggle variant="primary" id="industry-dropdown">
        <span className='dropdown'>Industry</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {industryOptions.map((industry, index) => (
          <Dropdown.Item key={index}>{industry}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default IndustryDropdown;
