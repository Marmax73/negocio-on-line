//Este modulo nos da una clase que se llama
// PrismaClient(); por lo tanto, hay que instanciarlo.

import {PrismaClient} from "@prisma/client"

export const prisma =  new PrismaClient() // Listo! con esto ya estamos conectados.
// estamos diciendo, "conectate con la misma configuración que ya generamos"