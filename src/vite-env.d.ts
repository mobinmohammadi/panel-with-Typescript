/// <reference types="vite/client" />

interface IAuthUser {
  id: number;
  name: string;
}

interface ILoginData {
  email: string;
  password: string;
}

interface IUserData {
  id: number;
  firstname: string;
  lastname: string;
  role: string;
  email: string;
  avatar : string
}
