import { rm } from 'fs/promises';
import { join } from 'path';
import { getConnection } from 'typeorm';

global.beforeEach(async () => {
  try {
    await rm(join(__dirname, '..', 'test.sqlite'));
  } catch (error) {
    console.log("you tried to remove a nonexisting file, but that's ok");
  }
});

global.afterEach(async () => {
  const conn = await getConnection();
  await conn.close();
});
