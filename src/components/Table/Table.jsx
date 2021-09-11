import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TableItem, AdditionalInfoBlock, Pagination, Select, Input, Spinner } from './components';
import styles from './styles.css'

export function Table() {

  const {
    loading, info, errorMessage,
  } = useSelector((state) => state.data);
  
  const [selectedValue, setSelectedValue] = useState(null);
  const [activeItem, setActiveItem] = useState('');
  const [value, setValue] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });
  const sortedInfo = getFilteredData(info);


  //filtering logic
  function getFilteredData(array) {
    return (
      [...array.filter(obj =>
        selectedValue ?
          obj.adress.state === selectedValue && (obj.firstName.includes(value) || obj.lastName.includes(value)) :
          (obj.firstName.includes(value) || obj.lastName.includes(value)))]
    )
  }

  sortedInfo.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  })

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig.key === key & sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  const getClassNameFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  const getActiveItem = (item) => {
    setActiveItem(item)
  }

  const handleChange = e => {
    setSelectedValue(e.target.value);
  };

  return (<div className="wrapper">
    <form onSubmit={(event) => {
      event.preventDefault();
    }}>
      <Input placeholder='Search by Name' value={value} onChangeText={setValue} />
      <Select value={selectedValue} setSelectedValue={handleChange}></Select>
    </form>
    <table info={info}>
      <thead>
        <tr>
          <th><button type="button" onClick={() => requestSort('id')}
            className={getClassNameFor('id')}>
            id
          </button></th>
          <th><button type="button" onClick={() => requestSort('firstName')}
            className={getClassNameFor('firstName')}>
            First Name
          </button></th>
          <th><button type="button" onClick={() => requestSort('lastName')}
            className={getClassNameFor('lastName')}>
            Last Name
          </button></th>
          <th><button type="button" onClick={() => requestSort('email')}
            className={getClassNameFor('email')}>
            Email
          </button></th>
          <th><button type="button" onClick={() => requestSort('phone')}
            className={getClassNameFor('phone')}>
            Phone
          </button></th>
        </tr>
      </thead>
      <tbody>
        {loading ? <Spinner /> : null}
        {errorMessage ? <h2 style={{ color: 'red' }}>{errorMessage}</h2> : null}
        {info ? <Pagination
          data={sortedInfo}
          RenderComponent={TableItem}
          dataLimit={20}
          setActiveItem={getActiveItem}
        /> : null}
      </tbody>
    </table>
    {activeItem ?
      <AdditionalInfoBlock info={activeItem} onClick={() => setActiveItem(null)}></AdditionalInfoBlock>
      : null}
  </div>)
}

