import express, {Router} from "express";
import serverless from "serverless-http";

const api = express();

let num = 0;

const router = Router();
router.get("/", (req, res) => {
    num++;
    res.sendStatus(200).send({number: num, previous: num - 1});
});

router.get("/number", (req, res) => {
    res.sendStatus(200).send({number: num});
});

api.use("/api/", router);

export const handler = serverless(api);
