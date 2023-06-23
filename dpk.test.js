const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey(null); // Pass null as input
    expect(trivialKey).toBe("0");
  });

  it("Generates a hash when input is undefined", () => {
    const result = deterministicPartitionKey(undefined); // Pass undefined as input
    expect(result).not.toBeFalsy();
    expect(typeof result).toBe("string");
  });

  it("Returns the provided partitionKey when given as input", () => {
    const input = { partitionKey: "customKey" };
    const result = deterministicPartitionKey(input);
    expect(result).toBe("customKey");
  });

  it("Generates a hash when event is provided without partitionKey", () => {
    const input = { id: 1, name: "Event 1" };
    const result = deterministicPartitionKey(input);
    expect(result).not.toBeFalsy();
    expect(typeof result).toBe("string");
  });

  it("Generates the same key for the same event data", () => {
    const input1 = { id: 1, name: "Event 1" };
    const input2 = { id: 1, name: "Event 1" };
    const result1 = deterministicPartitionKey(input1);
    const result2 = deterministicPartitionKey(input2);
    expect(result1).toBe(result2);
  });

  it("Generates a different key for different event data", () => {
    const input1 = { id: 1, name: "Event 1" };
    const input2 = { id: 2, name: "Event 2" };
    const result1 = deterministicPartitionKey(input1);
    const result2 = deterministicPartitionKey(input2);
    expect(result1).not.toBe(result2);
  });

  it("Generates a hash when input is not an object", () => {
    const input = "test";
    const result = deterministicPartitionKey(input);
    expect(result).not.toBeFalsy();
    expect(typeof result).toBe("string");
  });

  it("Generates a hash when input is null", () => {
    const input = null;
    const result = deterministicPartitionKey(input);
    expect(result).not.toBeFalsy();
    expect(typeof result).toBe("string");
  });
});
