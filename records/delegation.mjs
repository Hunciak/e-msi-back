import { pool } from "../utils/db.mjs";

export const getDelegation = async () => {
  console.log("teraz tutaj");
  try {
    const [res] = await pool.query("SELECT * FROM delegations");
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default getDelegation;