import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import styled from 'styled-components';
import { TableItem, AdditionalInfoBlock, Pagination} from './components';
import { Input, Spinner } from '../../components';
import styles from './styles.css'

export function Table() {

  const {
    loading, info, errorMessage,
  } = useSelector((state) => state.data);
  const [selectedValue, setSelectedValue] = useState(0);
  const [activeItem, setActiveItem] = useState('');
  const [value, setValue] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });
  let sortedInfo = [...info.filter(obj => selectedValue ? obj.adress.state === selectedValue && (obj.firstName.includes(value) || obj.lastName.includes(value)):(obj.firstName.includes(value) || obj.lastName.includes(value)))];



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
      <select name="states" id="states" onChange={handleChange} value={selectedValue}>
        <option value={null}></option>
        <option value="AL">AL</option>
        <option value="OR">OR</option>
        <option value="NJ">NJ</option>
        <option value="NY">NY</option>
        <option value="IA">IA</option>
        <option value="AR">AR</option>
      </select>
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
        {info?  <Pagination
            data={sortedInfo}
            RenderComponent={TableItem}
            pageLimit={6}
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

