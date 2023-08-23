import { Router } from "express";
import {getDelegation} from "../records/delegation.mjs"; // Skorzystaj z odpowiedniej ścieżki

export const delegationsRouter = Router()
.get('/', async (req, res) => {
  try {
    const data = await getDelegation();
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).send("Wystąpił błąd");
  }
});

export default delegationsRouter;