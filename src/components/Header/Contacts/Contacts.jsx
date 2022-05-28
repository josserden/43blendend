import { ContactLink, ContactsList } from './Contacts.styled';
import { AiOutlineMail } from 'react-icons/ai';
import { MdPhoneAndroid } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';

export const Contacts = ({ place }) => {
  return (
    <ContactsList place={place}>
      {place === 'footer' && (
        <li>
          <ContactLink href="">
            <GoLocation size="14px" />
            г. Киев, пр-т Леси Украинки, 26
          </ContactLink>
        </li>
      )}
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
