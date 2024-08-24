// import { PATH_DB } from '../constants/contacts.js';
import {getAllWithoutLog} from '../scripts/getAllWithoutLog.js';


export const countContacts = async () => {
  const contacts = await getAllWithoutLog();
  return contacts.length;
};

console.log(await countContacts());
