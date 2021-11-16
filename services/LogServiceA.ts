import { LogService } from './LogServiceAbstract';

export class LogServiceA extends LogService {
  log = (msg: string) => {
    console.log(`LogServiceA -> ${msg}`);
  };
}
