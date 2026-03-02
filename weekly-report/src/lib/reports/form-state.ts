export type CreateReportFieldErrors = {
  title?: string;
  summary?: string;
};

export type CreateReportFormState = {
  message: string;
  fieldErrors: CreateReportFieldErrors;
  values: {
    title: string;
    summary: string;
  };
};

export const initialCreateReportFormState: CreateReportFormState = {
  message: "",
  fieldErrors: {},
  values: {
    title: "",
    summary: "",
  },
};
