import { Hoge } from './hoge';
import { Huga } from './huga';

export function handler() {
  const hoge = new Hoge();
  hoge.message('run test1');

  const huga = new Huga('run test2');
  huga.message();
  huga.message();
}
