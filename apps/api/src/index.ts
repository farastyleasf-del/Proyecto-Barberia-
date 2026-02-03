import "dotenv/config";
import cors from "cors";
import express from "express";

import { router as adminRouter } from "./modules/admin/router.js";
import { router as bookingRouter } from "./routes/booking.js";
import { router as catalogRouter } from "./routes/catalog.js";
import { router as paymentsRouter } from "./routes/payments.js";
import { router as usersRouter } from "./routes/users.js";
import { router as aiRouter } from "./routes/ai.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/users", usersRouter);
app.use("/api/catalog", catalogRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/payments", paymentsRouter);
app.use("/api/admin", adminRouter);
app.use("/api/assistant", aiRouter);

const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on :${port}`);
});
