import { Router } from "express";
import { addContractor } from "../records/contractors.mjs";
import { getContractors } from "../records/contractors.mjs";
import { deleteContractor } from "../records/contractors.mjs";
import { editContracotrs } from "../records/contractors.mjs";



export const contractorsRouter = Router()

    .post('/',async (req, res)  => {
        try {
            const add = await addContractor(req.body);
            add === 200 ? res.sendStatus(200) : res.sendStatus(500)
        } catch (e) {
            console.error(e);
        res.status(500).send("Wystąpił błąd");
        }
    })
    .get('/', async (req, res) => {
        try {
            const get = await getContractors();
            
            res.json(get);
        } catch (e) {
            console.log(e);
        }
    })
    .delete('/delete', async (req, res) => {

        try{
            await deleteContractor(req.query.id)
            res.sendStatus(200)
        } catch (e) {
            res.sendStatus(500)
        }
    })
    .post('/edit', async (req, res) => {
        try {
            await editContracotrs(req.body);
            res.sendStatus(200)
        } catch {
            res.sendStatus(500)
        }
    })
    



export default contractorsRouter;