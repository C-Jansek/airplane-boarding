import { spawn } from 'child_process';

spawn('nodemon', ['-x', 'ts-node', `src/index.ts`], {
    stdio: 'inherit',
    shell: true,
});
