// import { PATH_DB } from '../constants/contacts.js';
import updateContacts  from '../scripts/updateContacts.js';
export const removeAllContacts = async () => {
  await updateContacts([]);
};

removeAllContacts();



