// import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from '../scripts/getAllContacts.js';
import updateContacts from '../scripts/updateContacts.js';


export const removeLastContact = async () => {
  const contacts = await getAllContacts();
  contacts.pop();
  updateContacts(contacts);
};

removeLastContact();
