/// <reference types="vite/client" />

interface IAuthUser {
  id: number;
  name: string;
}

interface ILoginData {
  email: string;
  password: string;
}

interface IUserRedux {
  user: IUserData[];
  isAuthentication: boolean;
}

interface ICategoryRespone {
  icon: string;
  id: number;
  name: string;
  status: boolean;
}

interface IUserData {
  id: number;
  firstname: string;
  lastname: string;
  role: string;
  email: string;
  avatar: string;
}

interface IDashboardRespone {
  productsCount: number;
  usersCount: number;
  totalRevenue: number;
  totalRevenueByProducts: number;
}

 interface IProductsFormInputs {
  name: string;
  longDescription: string;
  shortDescription: string;
  quantity: string;
  categoryId: number;
  price: string;
  main_image : string
}
