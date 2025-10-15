import { IsDateString, IsEmail, IsOptional, IsString, IsNumber, IsInt, IsISO8601, IsNotEmpty, IsEnum } from "class-validator";

export enum TipoNotificacion {
    VACUNACION = 'Vacunación',
    DESPARACITACION_INTERNA = 'Desparasitación interna',
    DESPARACITACION_EXTERNA = 'Desparasitación externa',

}


export class CreateEmailNotificacioneDto {
    @IsString()
    tipo: string;

    @IsString()
    destinatario: string;

    @IsString()
    descripcion: string;

    @IsISO8601()
    fecha_envio: string;

    @IsOptional()
    @IsNumber()
    vacunaId?: number;

    @IsOptional()
    @IsNumber()
    empresaId?: number;

    @IsOptional()
    @IsNumber()
    createdBy?: number;
}