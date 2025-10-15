import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateEmailNotificacioneDto } from './dto/create-email-notificacione.dto';
import { UpdateEmailNotificacioneDto } from './dto/update-email-notificacione.dto';
import { NATS_SERVICE } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class EmailNotificacionesService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger('Notificaciones-Ms');
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) {
    super();
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('✅ Notificaciones-ms conectado a la base de datos');
  }

  async create(dto: CreateEmailNotificacioneDto) {
    this.logger.log(`🧾 Creando notificación para: ${dto.destinatario}`);

    const notificacion = await this.notificacionRecord.create({
      data: {
        tipo: dto.tipo,
        descripcion: dto.descripcion,
        fecha_envio: new Date(dto.fecha_envio),
        destinatario: dto.destinatario,
        vacunaId: dto.vacunaId,
        empresaId: dto.empresaId,
        createdBy: dto.createdBy,
      
      },
    });

    this.logger.log(`✅ Notificación guardada: ${notificacion.not_id}`);
    return notificacion;
  }



}
