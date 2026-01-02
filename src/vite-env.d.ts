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
  user: IUserData | null;
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
  firstName: string;
  lastName: string;
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
  quantity: number;
  categoryId: number;
  price: number;
  main_image: File;
}

interface IProduct {
  categoryId: number;
  createdAt: string;
  id: number;
  longDescription: string;
  main_image: string;
  name: string;
  price: number;
  quantity: number;
  shopId: number;
  shortDescription: string;
  status: boolean;
  updatedAt: string;
  productImages: ProductImgChild[];
}

interface ProductImgChild {
  id: number;
  image: string;
  productId: number;
}

interface IApiResponse<T> {
  data: T;
  message: string;
}

interface IUpdateProfail {
  firstName: string;
  lastName: string;
}

interface ICoupans {
  code: string;
  discountPrice: numnber;
  discountType: string;
}
