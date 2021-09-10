import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import styled from 'styled-components';
import { TableItem, AdditionalInfoBlock } from './components';
import { Input, Spinner } from '../../components';
import styles from './styles.css'

export function Table() {

  const {
    loading, info, errorMessage,
  } = useSelector((state) => state.data);

  const [activeLine, setActiveLine] = useState('');
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  const [sortConfig, setSortConfig] = useState({key:'id', direction:'ascending'});
  let sortedInfo = [...info];

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

  return <>
    <form onSubmit={(event) => {
      setFilteredData(sortedInfo.filter(obj => obj.firstName.includes(value)))
      console.log(filteredData);
      event.preventDefault();
    }}>
      <Input value={value} onChangeText={setValue} />
    </form>
    <StyledTable info={info}>
      <tr>
        <th><button type="button" onClick={() => requestSort('id')}
        className={getClassNameFor('id')}>
          id
        </button></th>
        <th><button type="button" onClick={() => requestSort('firstName')}
        className={getClassNameFor('firstName')}>
          firstName
        </button></th>
        <th><button type="button" onClick={() => requestSort('lastName')}
        className={getClassNameFor('lastName')}>
          lastName
        </button></th>
        <th><button type="button" onClick={() => requestSort('email')}
        className={getClassNameFor('email')}>
          email
        </button></th>
        <th><button type="button" onClick={() => requestSort('phone')}
        className={getClassNameFor('phone')}>
          phone
        </button></th>
      </tr>
      {loading ? <Spinner /> : null}
      {errorMessage ? <h2 style={{ color: 'red' }}>{errorMessage}</h2> : null}
      {filteredData ? filteredData 
        // .filter(obj => obj['firstName'] === value)
        .map((item) => (
          <TableItem info={item} onClick={() => setActiveLine(item.id)}
            key={item.id}></TableItem>
        )) : sortedInfo
        .map((item) => (
          <TableItem info={item} onClick={() => setActiveLine(item.id)}
            key={item.id}></TableItem>)) }

    </StyledTable>
    {activeLine ? info
      .filter((item) => item.id === activeLine)
      .map((item) => (
        <AdditionalInfoBlock info={item}></AdditionalInfoBlock>
      )) : null}
  </>
}

const StyledTable = styled.table`
width: 1000px;
background: rgba(0, 0, 0, 0.6);
`;