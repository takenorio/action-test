const core = require("@actions/core");

try {
  const input = core.getInput("id_of_input", { required: true });
  core.setOutput("id_of_output", input);
} catch (error) {
  core.setFailed(error.message);
}
