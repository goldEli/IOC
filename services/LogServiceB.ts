import { LogService } from './LogServiceAbstract';

export class LogServiceB extends LogService {
  log = (msg: string) => {
    console.log(`LogServiceB -> ${msg}`);
  };
}
