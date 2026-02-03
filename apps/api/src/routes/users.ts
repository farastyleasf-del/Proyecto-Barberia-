import { Router } from "express";
import { z } from "zod";

const router = Router();

const userSchema = z.object({
  role: z.enum(["admin", "barber"]),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional()
});

router.get("/", (_req, res) => {
  res.json({ data: [], message: "Lista de usuarios (mock)" });
});

router.post("/", (req, res) => {
  const payload = userSchema.parse(req.body);
  res.status(201).json({ data: payload, message: "Usuario creado (mock)" });
});

router.patch("/:id", (req, res) => {
  res.json({ id: req.params.id, updates: req.body, message: "Usuario actualizado (mock)" });
});

export { router };
