import { ContactLink, ContactsList } from './Contacts.styled';
import { AiOutlineMail } from 'react-icons/ai';
import { MdPhoneAndroid } from 'react-icons/md';

export const Contacts = ({ place }) => {
  return (
    <ContactsList>
      <li>
        <ContactLink href="mailto:">
          <AiOutlineMail size="14px" />
          info@devstudio.com
        </ContactLink>
      </li>
      <li>
        <ContactLink href="tel:">
          <MdPhoneAndroid />
          +38 096 111 11 11
        </ContactLink>
      </li>
    </ContactsList>
  );
};
