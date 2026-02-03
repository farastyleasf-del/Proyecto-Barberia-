import { Router } from "express";
import { z } from "zod";

const router = Router();

const paymentMethodSchema = z.object({
  name: z.string().min(2),
  provider: z.string().optional(),
  active: z.boolean().optional()
});

const paymentSchema = z.object({
  appointmentId: z.string(),
  paymentMethodId: z.string(),
  amountCents: z.number().int().positive(),
  status: z.enum(["pending", "paid", "failed"]).optional(),
  reference: z.string().optional()
});

router.get("/methods", (_req, res) => {
  res.json({ data: [], message: "Medios de pago (mock)" });
});

router.post("/methods", (req, res) => {
  const payload = paymentMethodSchema.parse(req.body);
  res.status(201).json({ data: payload, message: "Medio de pago creado (mock)" });
});

router.get("/", (_req, res) => {
  res.json({ data: [], message: "Pagos (mock)" });
});

router.post("/", (req, res) => {
  const payload = paymentSchema.parse(req.body);
  res.status(201).json({ data: payload, message: "Pago registrado (mock)" });
});

export { router };
