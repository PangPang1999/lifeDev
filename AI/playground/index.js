import { get_encoding } from "tiktoken";

const encoding = get_encoding("cl100k_base");

// const encoding = get_encoding();
const tokens = encoding.encode(
  "hello world this is the first test of tiktoken library"
);
console.log(tokens);
