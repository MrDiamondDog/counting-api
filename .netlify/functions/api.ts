import express, {Router} from "express";
import serverless from "serverless-http";

const api = express();

let num = 0;

const router = Router();
router.get("/", (req, res) => {
    num++;
    res.json({number: num, previous: num - 1});
});

router.get("/number", (req, res) => {
    res.json({number: num});
});

api.use("/api/", router);

export const handler = serverless(api);
