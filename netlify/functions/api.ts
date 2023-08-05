import express, {Router} from "express";
import serverless from "serverless-http";

const api = express();

let num = 0;

const router = Router();
router.get("/", (req, res) => {
    num++;
    res.send(num);
});

api.use("/api/", router);

export const handler = serverless(api);
