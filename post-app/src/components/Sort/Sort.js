import React, { PureComponent } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { sortOptions } from '../PostList/sortOptions';
import styles from './SortStyle.module.css';

class Sort extends PureComponent {
  render() {
    const { sort, handleSort} = this.props;

    return (
      <DropdownButton
        className={styles.dropdownButton}
        variant='outline-primary'
        title={sort.value ? sort.label : 'Sort'}
        id='sort'
      >
        {sortOptions.map((option, index) => (
          <Dropdown.Item
            key={index}
            active={sort.value === option.value}
            onClick={() => handleSort(option)}
          >
            {option.label}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    );
  }
}

export default Sort;
