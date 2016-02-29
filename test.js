import test from 'ava';
import fn from './';

test('index returns anything', t => {
  t.ok(fn());
});
