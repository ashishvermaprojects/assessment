const crypto = require("crypto");
const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
  it('returns trivial partition key when event is undefined', () => {
    const event = undefined;
    const result = deterministicPartitionKey(event);
    expect(result).toBe('0');
  });

  it('returns hashed partition key when event has no partition key', () => {
    const event = {};
    const hash = '78f28e74a30e46e8b8ce8e2c9a35e23716887799280d414d28d9872883e5a8be26cb2d724ab4a3e4d352b52a6f3ae9d217c282b9c6d83331e44801e3d3c27550';
    const result = deterministicPartitionKey(event);
    expect(result).toBe(hash);
  });

  it('returns the provided partition key', () => {
    const event = { partitionKey: 'myKey' };
    const result = deterministicPartitionKey(event);
    expect(result).toBe('myKey');
  });

  it('returns hashed partition key when the candidate is not a string', () => {
    const event = { partitionKey: { key: 'myKey' } };
    const hash = '78f28e74a30e46e8b8ce8e2c9a35e23716887799280d414d28d9872883e5a8be26cb2d724ab4a3e4d352b52a6f3ae9d217c282b9c6d83331e44801e3d3c27550';
    const result = deterministicPartitionKey(event);
    expect(result).toBe(hash);
  });

  it('returns hashed partition key when the candidate exceeds max length', () => {
    const candidate = 'a'.repeat(257);
    const hash = '41e94831e82b35496e1c6b6ea4c00ef1e4d0fe4de6458aa7048b3dfdd8b57023cb33b8bfaa3468e3ad3e2b141868c7a5a69bc596f98aefb6a399e724b9f5ebd6';
    const result = deterministicPartitionKey({ partitionKey: candidate });
    expect(result).toBe(hash);
  });
});
