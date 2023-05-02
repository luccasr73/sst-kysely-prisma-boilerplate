import { db } from './db';

export function create(body:{email:string, name:string}) {
  return db.insertInto('user').values(body).execute()
}

export function listAll(){
  return db.selectFrom('user').selectAll().execute()
}
