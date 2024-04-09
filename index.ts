// const { HELLO, HELLOSLASH, HELLOSLASHSINGLEQUOTED, HELLOSLASHDOUBLEQUOTED } =

import { Env, getEnvs } from "./env";
console.clear();
console.log(
  "Welcome to this lab to test some really hardcore advanced stuff related to the '/' character on WiNd0wZ!"
);
console.log("- NOT CASTED: ---------------------------");
console.log(getEnvs());
console.log("- ANY: ----------------------------------");
console.log(getEnvs() as any);
console.log("- AS ENV: -------------------------------");
console.log(getEnvs() as Env);
console.log("- GOOD BYE AND THANK YOU VERY MUCH -----");
console.warn(
  "- Did any of the printed properties output something different than just HELLO or /HELLO ?"
);
