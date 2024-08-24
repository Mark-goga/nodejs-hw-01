// import { PATH_DB } from '../constants/contacts.js';
import {getAllWithoutLog} from '../scripts/getAllWithoutLog.js';
import updateContacts from '../scripts/updateContacts.js';
import {createFakeContact} from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const prewContacts = await getAllWithoutLog();
  const newContacts = createFakeContact();
  prewContacts.push(newContacts);
  await updateContacts(prewContacts);
};

addOneContact();
