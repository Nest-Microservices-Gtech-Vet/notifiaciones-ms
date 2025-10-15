import { Controller, Logger } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { EmailNotificacionesService } from './email-notificaciones.service';
import { CreateEmailNotificacioneDto } from './dto/create-email-notificacione.dto';
import { UpdateEmailNotificacioneDto } from './dto/update-email-notificacione.dto';

@Controller()
export class EmailNotificacionesController {
  private readonly logger = new Logger(EmailNotificacionesController.name)

  constructor(
    private readonly emailNotificacionesService: EmailNotificacionesService,

  ) { }

  @EventPattern('notificacion.crear')
  async create(@Payload() data: any) {
    console.log('📩 Evento recibido en notificaciones-ms:', data);
    try {
      return await this.emailNotificacionesService.create(data);
    } catch (error) {
      console.error('❌ Error creando notificación:', error);
    }
  }

}
