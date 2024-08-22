// import { PATH_DB } from '../constants/contacts.js';
import {getAllContacts} from '../scripts/getAllContacts.js';
import updateContacts from '../scripts/updateContacts.js';
import {createFakeContact} from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const prewContacts = await getAllContacts();
  const newContacts = createFakeContact();
  prewContacts.push(newContacts);
  updateContacts(prewContacts);
};

addOneContact();
