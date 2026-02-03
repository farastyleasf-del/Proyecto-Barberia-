"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "barberia_admin_auth";

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  const login = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}
