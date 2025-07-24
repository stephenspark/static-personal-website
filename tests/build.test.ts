import { spawnSync } from 'node:child_process';
import { test, expect } from 'vitest';

// This test ensures the project builds without errors

test('astro build exits with code 0', () => {
  const result = spawnSync('npx', ['astro', 'build'], {
    encoding: 'utf-8',
    stdio: 'pipe'
  });

  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);

  expect(result.status).toBe(0);
});
