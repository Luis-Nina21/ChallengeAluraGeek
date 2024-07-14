async function listaCards(){
    const conexion = await fetch("http://localhost:3001/cards",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida=await conexion.json();
/*     console.log(conexion);
    console.log(conexionConvertida); */
    return conexionConvertida;
}

async function crearCard(imagen, nombre, precio){
    const conexion= await fetch("http://localhost:3001/cards",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        imagen:imagen,
        nombre:nombre,
        precio:precio
    })
    })

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function buscarCard(referencia){
    const conexion=await fetch(`http://localhost:3001/cards?q=${referencia}`)
    const conexionConvertida=conexion.json();

    return conexionConvertida;
}

export const conectaAPI={
    listaCards,crearCard,buscarCard
}
