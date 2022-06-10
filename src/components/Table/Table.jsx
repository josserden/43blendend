import React, { Component } from 'react';
import { BaseTable, THead, Td, Th, Text } from 'components';
import { MdDelete } from 'react-icons/md';

const tableHeaders = ['№', 'name', 'age', 'status', 'option'];

export class Table extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        age: '25',
        status: 'yes',
      },
      {
        id: 2,
        name: 'Jane Doe',
        age: '24',
        status: 'no',
      },
      {
        id: 3,
        name: 'Jack Doe',
        age: '26',
        status: 'yes',
      },
    ],
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <>
          {contacts.length > 0 ? (
            <BaseTable>
              <THead>
                <tr>
                  {tableHeaders.map((item, index) => (
                    <Th key={index}>{item}</Th>
                  ))}
                </tr>
              </THead>

              <tbody>
                {contacts.map(({ id, name, age, status }, index) => (
                  <tr key={id}>
                    <Td>{index + 1}</Td>
                    <Td>{name}</Td>
                    <Td>{age}</Td>
                    <Td>{status === 'yes' ? 'online' : 'offline'}</Td>
                    <Td>
                      <button type="button">
                        <MdDelete size="20px" />
                      </button>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </BaseTable>
          ) : (
            <Text textAlign="center">{'No contacts 😭'}</Text>
          )}
        </>
      </>
    );
  }
}
