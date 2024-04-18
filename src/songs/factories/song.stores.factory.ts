import { Injectable } from '@nestjs/common';

@Injectable()
export class SongStoresFactory {
  create() {
    return ['amazon', 'ebay'];
  }
}
