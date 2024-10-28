import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { FactorsModule } from './factors.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FactorsModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://guest:guest@rabbitmq:5672'],
        queue: 'factors_queue',
        queueOptions: { durable: false },
      },
    },
  );

  await app.listen();
  console.log('Factors microservice is running');
}
bootstrap();
