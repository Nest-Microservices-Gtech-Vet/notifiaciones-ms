import { Module } from '@nestjs/common';
import { EmailNotificacionesModule } from './email-notificaciones/email-notificaciones.module';


@Module({
  imports: [EmailNotificacionesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
