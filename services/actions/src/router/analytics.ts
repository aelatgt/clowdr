import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { gatherPresenceStats } from "../lib/analytics";
import { checkEventSecret } from "../middlewares/checkEventSecret";

export const router = express.Router();

// Protected routes
router.use(checkEventSecret);

router.post("/gatherPresenceStats", bodyParser.json(), async (req: Request, res: Response) => {
    try {
        console.log(`${req.originalUrl}: gathering presence stats`);
        await gatherPresenceStats();
    } catch (e) {
        console.error("Failure while gathering presence stats", e);
        res.status(500).json("Failure");
        return;
    }
    res.status(200).json("OK");
});
