import { PartialType } from '@nestjs/mapped-types';
import { CreateEmailNotificacioneDto } from './create-email-notificacione.dto';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateEmailNotificacioneDto extends PartialType(CreateEmailNotificacioneDto) {
  @IsOptional() @IsBoolean() enviado?: boolean;
  @IsOptional() @IsString() updatedBy?: number;
  @IsOptional() @IsDateString() fecha_envio?: string;
}
