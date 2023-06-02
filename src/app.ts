import express, { Application, Request, Response } from "express";
const app: Application = express();

//Testing
app.get("/", async (req: Request, res: Response) => {
  res.send("Working Successfully");
});

export default app;
