import { pool } from "../utils/db.mjs";
import {v4 as uuid} from 'uuid';

export const addContractor = async (contractor) => {
    
    try {
        if (!contractor.id) {
            contractor.id = uuid();
        }
        if (contractor.if_vat) {
            contractor.if_vat = "true";

        } else {
            contractor.if_vat = "false";
        }
        await pool.query("INSERT INTO `contractors` (`id`, `nip`, `regon`, `name`, `if_vat`, `street`, `house`, `apartment`) VALUES(?, ?, ?, ?, ?, ?, ?, ?)", [
            contractor.id,
            contractor.nip,
            contractor.regon,
            contractor.name,
            contractor.if_vat,
            contractor.street,
            contractor.house,
            contractor.apartment,
        ])
      
      return 200;
    } catch (e) {
      return 500;
      throw e;
    }
  };

  export const getContractors = async () => {
    try {
        const [get] = await pool.query("SELECT `id`, `nip`, `regon`, `name`, `if_vat`, `street`, `house`, `apartment` FROM `contractors` WHERE deleted = 'false'");
        return get;
    } catch (e) {
        return 500;
    }

  }

  export const deleteContractor = async (id) => {
    await pool.query("UPDATE `contractors` SET `deleted` = 'true' WHERE id = ?", [
      id,
    ])
  }

  export const editContracotrs = async (contractos) => {
    contractos.map(async (contractor) => {
      console.log(contractor);
      await pool.query("UPDATE `contractors` SET `nip`=?, `regon`=?, `name`=?, `if_vat`=?, `street`=?, `house`=?, `apartment`=? WHERE id = ?", [
        contractor.nip,
        contractor.regon,
        contractor.name,
        contractor.if_vat,
        contractor.street,
        contractor.house,
        contractor.apartment,
        contractor.id,
      ])
    })

  }
  
  export default addContractor; getContractors; deleteContractor; editContracotrs;