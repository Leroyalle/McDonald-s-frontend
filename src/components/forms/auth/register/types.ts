export type RegisterResponse = {
  message: string;
  verified: boolean;
  userId: string;
  checkPassword: boolean;
};

export type VerifyResponse = {
  message: string;
  verified: boolean;
  checkPassword: boolean;
};

export type VerifyCodeParams = {
  userId: string;
  code: string;
};

export type RegisterParams = {
  email: string;
  password: string;
  confirmPassword: string;
};
