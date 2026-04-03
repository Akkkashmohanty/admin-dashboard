import { create } from "zustand";

interface AuthState {
    token: string | null;
    setToken: (token: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,

    setToken: (token) => {
        localStorage.setItem("admin_token", token);
        set({ token });
    },

    logout: () => {
        localStorage.removeItem("admin_token");
        set({ token: null });
    },
}));