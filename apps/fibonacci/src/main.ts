import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { FibonacciModule } from './fibonacci.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FibonacciModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://guest:guest@rabbitmq:5672'],
        queue: 'fibonacci_queue',
        queueOptions: { durable: false },
      },
    },
  );

  await app.listen();
  console.log('Fibonacci microservice is running');
}
bootstrap();
