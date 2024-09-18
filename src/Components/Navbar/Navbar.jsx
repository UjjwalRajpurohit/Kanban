import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onGroupingChange, onOrderingChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [grouping, setGrouping] = useState('Status');
  const [ordering, setOrdering] = useState('Priority');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
//   console.log(ordering);

  const handleGroupingChange = (event) => {
    const selectedGrouping = event.target.value;
    setGrouping(selectedGrouping);
    
    // Store value in local storage with key 'type' based on selection
    if (selectedGrouping === 'Status') {
      localStorage.setItem('type', 1);
    } else if (selectedGrouping === 'User') {
      localStorage.setItem('type', 2);
    }

    // Call the onGroupingChange function if provided
    if (onGroupingChange) {
      onGroupingChange(selectedGrouping);
    }
  };

  const handleOrderingChange = () => {
    setOrdering("Priority");
    
    // Store value in local storage with key 'type' based on selection
    if (ordering === 'Priority') {
      localStorage.setItem('type', 3);
    }

    // Call the onOrderingChange function if provided
    if (onOrderingChange) {
      onOrderingChange("Priority");
    }
};

  return (
    <div className="navbar">
      <button className="display-btn" onClick={toggleDropdown}>
        Display &#9660;
      </button>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          {/* Grouping Dropdown */}
          <div className="dropdown-group">
            <label htmlFor="grouping">Grouping</label>
            <select id="grouping" value={grouping} onChange={handleGroupingChange}>
              <option onChange={()=>setGrouping("Status")} value="Status">Status</option>
              <option onChange={()=>setGrouping("Status")} value="User">User</option>
            </select>
          </div>

          {/* Ordering Dropdown */}
          {/* <div className="dropdown-order">
            <label htmlFor="ordering">Ordering</label>
            <select id="ordering" value={ordering} >
              <option onChange={()=>console.log("aa gaye")}value="Priority">Priority</option>
            </select>
          </div> */}
          <div className="dropdown-order">
            <label htmlFor="ordering">Ordering</label>
            <select id="ordering" value={ordering} onChange={()=>handleOrderingChange("Priority")}>
              <option onChange={()=>console.log("ho gaya")} value="Priority">Priority</option>
              {/* Add other options here if needed */}
            </select>
            <button value="Priority"  onClick={(e)=>handleOrderingChange(e)}>Check</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
