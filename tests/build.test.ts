import { spawnSync } from 'node:child_process';
import { test, expect } from 'vitest';

// This test ensures the project builds without errors

test('astro build exits with code 0', () => {
  // npm_execpath is a JS entry point under Node-based installs, or a native binary (e.g. pnpm.exe)
  const packageManager = process.env.npm_execpath ?? 'pnpm';
  const isScript = /\.[cm]?js$/.test(packageManager);
  const result = spawnSync(
    isScript ? process.execPath : packageManager,
    isScript ? [packageManager, 'run', 'build'] : ['run', 'build'],
    {
    encoding: 'utf-8',
    stdio: 'pipe',
    timeout: 60000 // Set timeout to 60 seconds
    }
  );

  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);

  expect(result.status).toBe(0);
}, 65000);
