export interface User {
  id: number;
  name: string;
  email: string;
}

export interface CounterProps {
  initialValue?: number;
  onCountChange?: (count: number) => void;
}

export type Theme = 'light' | 'dark';