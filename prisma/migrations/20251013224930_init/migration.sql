-- CreateTable
CREATE TABLE "NotificacionRecord" (
    "not_id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha_envio" TIMESTAMP(3) NOT NULL,
    "destinatario" TEXT NOT NULL,
    "enviado" BOOLEAN NOT NULL DEFAULT false,
    "vacunaId" TEXT,
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NotificacionRecord_pkey" PRIMARY KEY ("not_id")
);
