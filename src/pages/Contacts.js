import React, { Component } from 'react';
import { Form, Table } from 'components';
import { getStatus } from 'service/status-service';

export class Contacts extends Component {
  state = {
    contacts: [],
  };

  addContact = async ({ name, age }) => {
    const newContact = {
      name,
      age,
      status: await getStatus(),
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  deleteContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));
  };

  render() {
    return (
      <>
        <Form onSubmit={this.addContact} />
        <Table contacts={this.state.contacts} onDelete={this.deleteContact} />
      </>
    );
  }
}
