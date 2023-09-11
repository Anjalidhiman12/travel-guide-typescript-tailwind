import { env, ENV } from "./environment";


const local = "http://localhost:3050/state";
const dev = "http://localhost:3050/state";
const qa = "http://localhost:3050/state";
const stage = "http://localhost:3050/state";
const prod = "http://localhost:3050/state";

export const config: { [T in ENV]: string } = {
    dev,
    local,
    prod,
    qa,
    stage,
  };
  
  export function getStateBaseUrl(targetEnv: ENV): string {
    return config[targetEnv];
  }
  
  export default config[env];