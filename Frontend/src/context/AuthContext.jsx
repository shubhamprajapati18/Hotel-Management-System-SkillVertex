import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { email, name, token? }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem("hms_auth_user");
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch (e) {
        localStorage.removeItem("hms_auth_user");
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (email, password) => {
    // TO-DO: replace with actual API call
    // Here we simulate success for any non-empty credentials
    if (!email || !password) {
      throw new Error("Email and password required");
    }
    const fakeUser = { email, name: email.split("@")[0], token: "fake-token-123" };
    localStorage.setItem("hms_auth_user", JSON.stringify(fakeUser));
    setUser(fakeUser);
    return fakeUser;
  };

  const register = async (name, email, password) => {
    // TODO: replace with real register API
    if (!name || !email || !password) {
      throw new Error("Name, email and password required");
    }
    // simulate creating account and returning created user
    const newUser = { email, name, token: "fake-token-456" };
    localStorage.setItem("hms_auth_user", JSON.stringify(newUser));
    setUser(newUser);
    return newUser;
  };

  const signOut = () => {
    localStorage.removeItem("hms_auth_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, register }}>
      {children}
    </AuthContext.Provider>
  );
};
