import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('PARITY_SERVICE') private readonly parityClient: ClientProxy,
  ) {}

  async checkParity(number: number): Promise<{ isPair: boolean }> {
    return firstValueFrom(
      this.parityClient.send<{ isPair: boolean }, number>(
        'parity_check',
        number,
      ),
    );
  }
}
