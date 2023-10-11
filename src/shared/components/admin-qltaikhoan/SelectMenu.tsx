import React from 'react';
import styles from './SelectMenu.module.scss'

const SelectMenu = ({ onSelectChange }) => {
    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      onSelectChange(selectedValue);
    };
  
    return (
      <select 
        onChange={handleSelectChange}
        className={styles.menu}
      >
        <option value="Tất cả">Tất cả </option>
        <option value="Chủ khách sạn">Chủ khách sạn</option>
        <option value="Khách hàng">Khách hàng</option>
      </select>
    );
};

export default SelectMenu;