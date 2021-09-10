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

  const [activeLine, setActiveLine] = useState('');
  const [value, setValue] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });
  let sortedInfo = [...info.filter(obj => obj.firstName.includes(value) || obj.lastName.includes(value))];

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

  const getActiveLine = (e) => {
    setActiveLine(e.target.phone)
  }

  return (<wrapper>
    <form onSubmit={(event) => {
      event.preventDefault();
    }}>
      <Input placeholder='Search by Name' value={value} onChangeText={setValue} />
      <select name="states" id="states">
        <option value="al">AL</option>
        <option value="or">OR</option>
        <option value="nj">NJ</option>
        <option value="or">OR</option>
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
        {/* {sortedInfo.map((item) => (
          <TableItem info={item} onClick={(e) => setActiveLine(item.phone)}
            key={item.phone}></TableItem>))} */}
            <Pagination
            data={sortedInfo}
            RenderComponent={TableItem}
            pageLimit={5}
            dataLimit={20}
          />
      </tbody>
    </table>
    {activeLine ? sortedInfo
      .filter((item) => item.phone === activeLine)
      .map((item) => (
        <AdditionalInfoBlock info={item} onClick={() => setActiveLine(null)}></AdditionalInfoBlock>
      )) : null}
  </wrapper>)
}

