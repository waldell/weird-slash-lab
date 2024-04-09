export type Env = {
  HELLO: string;
  HELLOSLASH: string;
  HELLOSLASHSINGLEQUOTED: string;
  HELLOSLASHDOUBLEQUOTED: string;
  HELLOSTATICALLYDEFINED: string;
};

export const getEnvs = () => {
  const { HELLO, HELLOSLASH, HELLOSLASHSINGLEQUOTED, HELLOSLASHDOUBLEQUOTED } =
    process.env;
  return {
    HELLO,
    HELLOSLASH,
    HELLOSLASHSINGLEQUOTED,
    HELLOSLASHDOUBLEQUOTED,
    HELLOSTATICALLYDEFINED: "/HELLO",
  };
};