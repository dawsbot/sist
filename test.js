import test from 'ava';
import fn from './';

test('valid args', t => {
  t.throws(() => {
    fn(false);
  }, Error);
});

test('title', t => {
  t.is(fn(), true);
});
