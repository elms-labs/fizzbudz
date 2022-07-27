import { Pool } from 'pg';
const PG_URI = 'postgres://lgntezrm:Q9IP3MV2Dq9_IRMJAyn_itJ4wmPI5dJ7@heffalump.db.elephantsql.com/lgntezrm';

const pool = new Pool({
  connectionString: PG_URI
});

export default {
  query: (text, params?, callback?): any => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};