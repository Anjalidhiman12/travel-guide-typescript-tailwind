export type ENV = "local" | "dev" | "qa" | "stage" | "prod";

export const env: ENV = process.env.REACT_APP_APP_ENV as ENV || "local";