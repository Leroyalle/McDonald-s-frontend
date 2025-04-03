export type LoginResponse = {
  message: string;
  token: string;
  verified: boolean;
  checkPassword: boolean;
};

export type LoginParams = {
  email: string;
  password: string;
};
