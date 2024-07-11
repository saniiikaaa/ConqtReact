
import React, { useState } from 'react';
import './filter.css'; 

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={toggleDropdown}>
        <span>Refine By</span>
        <span className="filter-icon">▼</span>
      </button>
      {isOpen && (
        <div className="filter-menu">
          <div className="filter-header">
            
            <button className="clear-button">Clear</button>
          </div>
          <ul className="filter-list">
  <li>Date of registration <span className="arrow-icon">{'>'}</span></li>
  <li>Vendor score <span className="arrow-icon">{'>'}</span></li>
  <li>Rating <span className="arrow-icon">{'>'}</span></li>
  <li>Status <span className="arrow-icon">{'>'}</span></li>
  <li>Type of business <span className="arrow-icon">{'>'}</span></li>
  <li>Location <span className="arrow-icon">{'>'}</span></li>
  <li>Assign to <span className="arrow-icon">{'>'}</span></li>
</ul>

        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
