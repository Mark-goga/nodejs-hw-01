// import { PATH_DB } from '../constants/contacts.js';
import { getAllWithoutLog } from '../scripts/getAllWithoutLog.js';
import updateContacts from '../scripts/updateContacts.js';


export const removeLastContact = async () => {
  const contacts = await getAllWithoutLog();
  contacts.pop();
  await updateContacts(contacts);
};

removeLastContact();
