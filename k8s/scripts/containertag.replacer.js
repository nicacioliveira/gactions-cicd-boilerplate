const fs = require("fs");
const JSONTOYAML = require("json-to-pretty-yaml");
const YAML = require("yaml");

const deploymentFilePath = "../nodeapi.deployment.yaml";

const [refString = "", replaceString = ""] = process.argv.slice(2);

const deployment = YAML.parseDocument(
  fs.readFileSync(deploymentFilePath, "utf8")
).toJSON();

deployment.spec.template.spec.containers.forEach((c) => {
  if (c && c.image && c.image.includes(refString)) {
    c.image = replaceString;
  }
});

const newFile = JSONTOYAML.stringify(deployment);
console.log(newFile);
fs.writeFileSync(deploymentFilePath, newFile, { encoding: "utf-8" });
