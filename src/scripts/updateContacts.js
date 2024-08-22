import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export default function updateContacts(contacts) {
  return fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 1));
}
