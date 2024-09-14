// Éstas son las rutas a los distintos dominios. SE puede repetir en otros archivos

// Atento! Esta función está del lado del servidor..aparentemente no necesita el "default"
import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma"

export async  function GET(){
  const tareas = await prisma.task.findMany()
    return NextResponse.json(tareas)
  
}


  
  
  

export function POST() {
    return NextResponse.json(
        { "nombre":"marcelo",
           "apellido":"Martinez",
           "edad": 30 
         },
        { status: 200 },

    )
}