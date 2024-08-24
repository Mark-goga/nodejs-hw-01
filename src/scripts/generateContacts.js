import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllWithoutLog } from './getAllWithoutLog.js';
import updateContacts from './updateContacts.js';

const generateContacts = async (number) => {
  const newContacts = Array(number).fill(0).map(() => createFakeContact());
  const prewContacts = await getAllWithoutLog();
  newContacts.push(...prewContacts);
  await updateContacts(newContacts);
};

generateContacts(5);
