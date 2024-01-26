
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './IndustryDropdown.css'; // Reuse the existing CSS for styling

const ServiceDropdown = () => {
  const serviceOptions = [
    'B2B Demand Generation',
    'Contact Appending',
    'Custom List Building',
    'Data Cleansing',
    'Data Appending',
    'Email Campaigns',
    'Email Appending',
    'Email Marketing',
    'Targeted Email List',
  ];

  return (
    <Dropdown className="custom-dropdown">
      <Dropdown.Toggle variant="primary" id="service-dropdown">
        Service
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {serviceOptions.map((service, index) => (
          <Dropdown.Item key={index}>{service}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ServiceDropdown;
