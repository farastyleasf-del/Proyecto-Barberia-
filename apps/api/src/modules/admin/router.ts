import { Router } from "express";

const router = Router();

router.get("/dashboard", (_req, res) => {
  res.json({
    stats: {
      appointmentsToday: 0,
      pendingPayments: 0,
      activeBarbers: 0
    }
  });
});

router.get("/appointments", (_req, res) => {
  res.json({ data: [], message: "Citas del panel (mock)" });
});

router.get("/services", (_req, res) => {
  res.json({ data: [], message: "Servicios del panel (mock)" });
});

router.get("/barbers", (_req, res) => {
  res.json({ data: [], message: "Barberos del panel (mock)" });
});

router.get("/payments", (_req, res) => {
  res.json({ data: [], message: "Pagos del panel (mock)" });
});

export { router };
