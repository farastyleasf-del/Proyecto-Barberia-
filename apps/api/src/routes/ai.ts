import { Router } from "express";

const router = Router();

router.post("/faq", (_req, res) => {
  res.json({ message: "Endpoint reservado para FAQ IA" });
});

router.post("/booking", (_req, res) => {
  res.json({ message: "Endpoint reservado para IA de agendamiento" });
});

export { router };
