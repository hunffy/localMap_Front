export const BaseUrl = "http://127.0.0.1:8000/api";

export type Notice = {
  id: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
