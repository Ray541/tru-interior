import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Theme = "dark" | "light" | "system";

interface ThemeState {
  theme: Theme;
  storageKey: string;
}

const STORAGE_KEY = "vite-ui-theme";

const initialTheme = (localStorage.getItem(STORAGE_KEY) as Theme) || "system";

const initialState: ThemeState = {
  theme: initialTheme,
  storageKey: STORAGE_KEY,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      localStorage.setItem(state.storageKey, action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
