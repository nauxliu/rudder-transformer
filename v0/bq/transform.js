const { processWarehouseMessage } = require("../util");

function processSingleMessage(message, destination) {
  return processWarehouseMessage("bq", message);
}

function process(event) {
  return processSingleMessage(event.message, event.destination);
}

exports.process = process;
