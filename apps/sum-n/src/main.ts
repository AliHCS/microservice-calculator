import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SumNModule } from './sum-n.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SumNModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://guest:guest@rabbitmq:5672'],
        queue: 'sumN_queue',
        queueOptions: { durable: false },
      },
    },
  );

  await app.listen();
  console.log('SumN microservice is running');
}
bootstrap();
