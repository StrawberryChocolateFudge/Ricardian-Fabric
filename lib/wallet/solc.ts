// import * as wrapper from "solc/wrapper";
// import { Options, Status } from "../types";
// import { readSolcFile } from "../view/utils";

// const solc = wrapper(window.Module);

// export async function compileFile(file: File): Promise<Options> {
//   const options: Options = { data: "", status: Status.Success, error: "" };
//   const name = file.name;
//   // Checking if the file is the correct extension
//   if (!name.includes(".sol")) {
//     options.error = "Solc: Wrong file format!";
//     options.status = Status.Failure;
//     return options;
//   }

//   const sol = await readSolcFile(file).catch((err) => {
//     options.error = err.message;
//     options.status = Status.Failure;
//     return options;
//   });

//   if (typeof sol === "string") {
//     const abi = compile(name, sol);
//     options.data = abi;
//   }

//   return options;
// }

// export function compile(name: string, content: string) {
//   const input = {
//     language: "Solidity",
//     sources: {
//       [name]: {
//         content,
//       },
//     },
//     settings: {
//       outputSelection: {
//         "*": {
//           "*": ["*"],
//         },
//       },
//     },
//   };
//   return JSON.parse(solc.compile(JSON.stringify(input)));
// }
