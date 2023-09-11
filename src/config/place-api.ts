import { env, ENV } from "./environment";

const local = "http://localhost:3050/place";
const dev = "http://localhost:3050/place";
const qa = "http://localhost:3050/place";
const stage = "http://localhost:3050/place";
const prod = "http://localhost:3050/place";


export const config: { [T in ENV]: string } = {
    dev,
    local,
    prod,
    qa,
    stage,
  };
  
  export function getPlaceBaseUrl(targetEnv: ENV): string {
    return config[targetEnv];
  }
  
  export default config[env];