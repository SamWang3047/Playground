export type LoginFormState = {
  message: string;
  fieldErrors: {
    email?: string;
    password?: string;
  };
  values: {
    email: string;
    password: string;
  };
};

export const initialLoginFormState: LoginFormState = {
  message: "",
  fieldErrors: {},
  values: {
    email: "",
    password: "",
  },
};
