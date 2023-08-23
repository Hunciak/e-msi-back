
import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: '141.95.67.150',
    port: '20666',
    user: 'root',
    password: 'GMUbB@e)~%6]qI}',
    database: 'e-msi',
    namedPlaceholders: true,
    decimalNumbers: true,
});


