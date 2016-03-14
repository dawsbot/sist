import test from 'ava';
import sist from '../index.js';

test('versions', t => {
  t.regex(sist(), /[0-9]*[0-9]*[0-9]*/g);
  t.regex(sist('node'), /[0-9]*[0-9]*[0-9]*/g);
  t.regex(sist('ruby'), /[0-9]*[0-9]*[0-9]*/g);
});

