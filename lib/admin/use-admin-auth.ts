"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "barberia_admin_auth";
const LAST_ACTIVITY_KEY = "barberia_admin_last_activity";
const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = localStorage.getItem(STORAGE_KEY) === "true";
      const lastActivity = localStorage.getItem(LAST_ACTIVITY_KEY);
      
      if (isAuth && lastActivity) {
        const timeSinceLastActivity = Date.now() - parseInt(lastActivity, 10);
        
        if (timeSinceLastActivity > INACTIVITY_TIMEOUT) {
          // Auto-logout after inactivity
          logout();
          return;
        }
      }
      
      setIsAuthenticated(isAuth);
    };

    checkAuth();

    // Update last activity on user interaction
    const updateActivity = () => {
      if (localStorage.getItem(STORAGE_KEY) === "true") {
        localStorage.setItem(LAST_ACTIVITY_KEY, Date.now().toString());
      }
    };

    // Listen for user activity
    window.addEventListener("mousedown", updateActivity);
    window.addEventListener("keydown", updateActivity);
    window.addEventListener("scroll", updateActivity);
    window.addEventListener("touchstart", updateActivity);

    // Check for inactivity every minute
    const interval = setInterval(checkAuth, 60000);

    return () => {
      window.removeEventListener("mousedown", updateActivity);
      window.removeEventListener("keydown", updateActivity);
      window.removeEventListener("scroll", updateActivity);
      window.removeEventListener("touchstart", updateActivity);
      clearInterval(interval);
    };
  }, []);

  const login = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    localStorage.setItem(LAST_ACTIVITY_KEY, Date.now().toString());
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(LAST_ACTIVITY_KEY);
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}
