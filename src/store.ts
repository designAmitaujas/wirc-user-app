import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { expo } from "../app.json";

interface AppAuthState {
  jwt: string;
  isAuth: boolean;
  name: string;
  setAuth: (arg0: { jwt: string; name: string }) => void;
  removeAuth: () => void;
}

console.log("current version : %d", _.round(_.toNumber(expo.version), 2));

export const useAppAuthState = create<AppAuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      jwt: "",
      name: "",
      setAuth: (arg0) => {
        set((_state) => ({
          jwt: arg0.jwt,
          name: arg0.name,
          isAuth: true,
        }));
      },
      removeAuth: () => {
        set((_state) => ({
          jwt: "",
          name: "",
          isAuth: false,
        }));
      },
    }),
    {
      name: "app-state",
      storage: createJSONStorage(() => AsyncStorage),
      version: _.round(_.toNumber(expo.version), 2),
    }
  )
);
