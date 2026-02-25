export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AppState {
  loading: boolean;
  error: string | null;
}