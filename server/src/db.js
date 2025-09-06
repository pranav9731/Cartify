import { JSONFileSync, LowSync } from 'lowdb/node';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbFile = path.join(__dirname, '..', 'db.json');

const defaultData = { users: [], items: [], carts: [] };
const adapter = new JSONFileSync(dbFile);
const db = new LowSync(adapter, defaultData);
db.read();
if (!db.data) db.data = defaultData;
db.write();

export { db };