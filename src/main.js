const { Command } = require("commander");

const deref = require("./deref.js");
const importMd = require("./importmd.js");
const genSampleCode = require("./gencode.js");
const patch = require("./patch.js");
const replaceInteger = require("./replaceint.js");
const groupTag = require("./grouptag.js");

const program = new Command();
program
    .name("postprocess")
    .description("Postprocess an OpenAPI document for ReDoc")
    .version("0.3.0");
program.command("deref")
    .description("Use $RefParser to dereference a JSON schema")
    .argument("<in-filename>", "Input JSON file")
    .argument("[out-filename]", "Output JSON file. If not specified, use in-filename.")
    .action(deref);
program.command("importmd")
    .description("Merge markdown files in <md-folder> to a markdown <gen-file>, and import it as $ref to JSON info.description.")
    .argument("<in-filename>", "Target JSON file")
    .argument("<md-folder>", "Folder of markdown files to import")
    .argument("<gen-md>", "Merged markdown files")
    .action(importMd);
program.command("gencode")
    .description("Generate sample code to JSON as x-code-samples")
    .argument("<in-filename>", "Target JSON file")
    .action(genSampleCode);
program.command("patch")
    .description("Apply JSON patch")
    .argument("<patch-filename>", "Patch file")
    .argument("<in-filename", "Target JSON file")
    .argument("[out-filename]", "Output JSON file. If not specified, use in-filename.")
    .action(patch)
program.command("replaceint")
    .description("Replace the example and default value of integer type to number type")
    .argument("<in-filename>", "Input JSON file")
    .argument("[out-filename]", "Output JSON file. If not specified, use in-filename.")
    .action(replaceInteger);
program.command("grouptag")
    .description("Group all tags in a tag group")
    .argument("<in-filename>", "Input JSON file")
    .argument("<tag-group>", "Tag group name")
    .action(groupTag);
program.parse();
