import { Module } from '@nestjs/common';
import { EmailNotificacionesService } from './email-notificaciones.service';
import { EmailNotificacionesController } from './email-notificaciones.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  imports: [
    NatsModule
  ],
  controllers: [EmailNotificacionesController],
  providers: [EmailNotificacionesService],
})
export class EmailNotificacionesModule {}
