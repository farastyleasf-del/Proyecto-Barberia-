import { Router } from "express";
import { z } from "zod";

const router = Router();

const appointmentSchema = z.object({
  serviceId: z.string(),
  barberId: z.string().optional(),
  clientName: z.string().min(2),
  clientPhone: z.string().optional(),
  clientEmail: z.string().email().optional(),
  startTime: z.string(),
  endTime: z.string()
});

router.get("/appointments", (_req, res) => {
  res.json({ data: [], message: "Citas (mock)" });
});

router.post("/appointments", (req, res) => {
  const payload = appointmentSchema.parse(req.body);
  res.status(201).json({ data: payload, message: "Cita creada (mock)" });
});

router.patch("/appointments/:id", (req, res) => {
  res.json({ id: req.params.id, updates: req.body, message: "Cita actualizada (mock)" });
});

export { router };
