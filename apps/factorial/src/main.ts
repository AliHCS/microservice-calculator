import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { FactorialModule } from './factorial.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FactorialModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://guest:guest@rabbitmq:5672'],
        queue: 'factorial_queue',
        queueOptions: { durable: false },
      },
    },
  );

  await app.listen();
  console.log('Factorial microservice is running');
}
bootstrap();
