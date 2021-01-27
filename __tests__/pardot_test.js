const integration = "pardot";
const name = "Pardot";
const pathToTransformerDestination = `../v0/destinations/${integration}/transform`;

const fs = require("fs");
const path = require("path");

const transformer = require(pathToTransformerDestination);

const inputDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_input.json`)
);
const outputDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_output.json`)
);
const inputData = JSON.parse(inputDataFile);
const expectedData = JSON.parse(outputDataFile);

inputData.forEach((input, index) => {
  it(`${name} - payload: ${index}`, () => {
    try {
      const output = transformer.process(input);
      expect(output).toEqual(expectedData[index]);
    } catch (error) {
      expect(error.message).toEqual(expectedData[index].error);
    }
  })
});