const fs = require("fs");
const fse = require("fs-extra");
const childProcess = require("child_process");

if (fs.existsSync("./build")) {
  fse.removeSync("./build");
}
childProcess.execSync("npm run build", { cwd: '../client', stdio: "inherit" });
