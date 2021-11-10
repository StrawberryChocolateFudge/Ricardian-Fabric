import solc from "solc";
import { Options, Status } from "../types";
import { readSolcFile } from "../view/utils";

//TODO: THIS IS WIP!!

export function callCompile(file: File): Options {
  const options: Options = { data: "", status: Status.Success, error: "" };
  if (!file.name.includes(".sol")) {
    options.error = "Solc: Wrong file format!";
    options.status = Status.Failure;
    return options;
  }

  //   const onSuccess = (data) => {
  //     options.data = compile(file.name, data);
  //   };

  //   const onError = (e) => {
  //     options.error = e;
  //     options.status = Status.Failure;
  //   };

  //   readSolcFile(file, onSuccess, onError);
}

export function compile(name: string, content: string) {
  const input = {
    language: "Solidity",
    sources: {
      [name]: {
        content,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };
  return JSON.parse(solc.compile(JSON.stringify(input)));
}
