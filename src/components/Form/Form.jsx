import React, { Component } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';

import {
  Button,
  LabelText,
  BaseForm,
  Label,
  Input,
  Section,
  Container,
} from 'components';

export class Form extends Component {
  render() {
    return (
      <>
        <Section>
          <Container>
            <BaseForm>
              <Label>
                <LabelText>
                  <BsFillPersonFill />
                  Name
                </LabelText>
                <Input
                  placeholder="Name"
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </Label>

              <Label>
                <LabelText>
                  <AiOutlineMessage />
                  Age
                </LabelText>

                <Input
                  placeholder="Age"
                  type="number"
                  name="age"
                  pattern="^[0-9]"
                  title="Only integer number"
                  min="1"
                  step="1"
                  required
                />
              </Label>

              <Button type="submit">add contact</Button>
            </BaseForm>
          </Container>
        </Section>
      </>
    );
  }
}
