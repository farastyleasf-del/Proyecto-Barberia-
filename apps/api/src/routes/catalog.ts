import { Router } from "express";
import { z } from "zod";

const router = Router();

const serviceSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  durationMinutes: z.number().int().positive(),
  priceCents: z.number().int().positive(),
  active: z.boolean().optional()
});

const barberSchema = z.object({
  fullName: z.string().min(2),
  bio: z.string().optional(),
  photoUrl: z.string().url().optional(),
  active: z.boolean().optional()
});

const workingHoursSchema = z.object({
  barberId: z.string(),
  dayOfWeek: z.number().int().min(0).max(6),
  startTime: z.string(),
  endTime: z.string()
});

router.get("/services", (_req, res) => {
  res.json({ data: [], message: "Servicios (mock)" });
});

router.post("/services", (req, res) => {
  const payload = serviceSchema.parse(req.body);
  res.status(201).json({ data: payload, message: "Servicio creado (mock)" });
});

router.get("/barbers", (_req, res) => {
  res.json({ data: [], message: "Barberos (mock)" });
});

router.post("/barbers", (req, res) => {
  const payload = barberSchema.parse(req.body);
  res.status(201).json({ data: payload, message: "Barbero creado (mock)" });
});

router.get("/working-hours", (_req, res) => {
  res.json({ data: [], message: "Horarios (mock)" });
});

router.post("/working-hours", (req, res) => {
  const payload = workingHoursSchema.parse(req.body);
  res.status(201).json({ data: payload, message: "Horario creado (mock)" });
});

export { router };
