import { cp, mkdir as md, test } from 'shelljs';

// Make ./dist/static if it doesn't exist yet.
if (!test('-e', 'dist/public')) {
  md('-p', 'dist/public');
}

cp('-R', 'src/public/.', 'dist/public');
cp('-R', 'src/views/.', 'dist/views');
