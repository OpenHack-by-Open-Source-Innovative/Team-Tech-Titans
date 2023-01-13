import { Parser } from "./parser.js";


let json_data = `{
    "menu": {
      "id": "file",
      "value": "File"
    }
}`;
Parser.parseJsontoEntityTree(json_data);
