//const { Env, getEnvs } = require("./env");
import { Env, getEnvs } from "./env";

const expected = {
  HELLO: "HELLO",
  HELLOSLASH: "/HELLO",
  HELLOSLASHSINGLEQUOTED: "/HELLO",
  HELLOSLASHDOUBLEQUOTED: "/HELLO",
  HELLOSTATICALLYDEFINED: "/HELLO",
};

test("not casted", () => {
  const actual = getEnvs();
  console.log(actual);
  expect(actual).toMatchObject(expected);
});
test("as any", () => {
  const actual = getEnvs() as any;
  console.log(actual);
  expect(actual).toMatchObject(expected);
});
test("as Env", () => {
  const actual = getEnvs() as Env;
  console.log(actual);
  expect(actual).toMatchObject(expected);
});
