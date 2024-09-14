import { NextRequest } from "next/server";

export function GET(request, {params}){
    return NextRequest.json("obteniendo respuesta"+ params.id)
    
}



export function PUT(request, {params}){
    return NextRequest.json("obteniendo respuesta"+ params.id)
    
}

export function DELETE(request, {params}){
    return NextRequest.json("obteniendo respuesta"+ params.id)
    
}