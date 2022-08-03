function consulta()
{
    var nom, apel, correo, duda, mensaje;
    nom=document.getElementById("nombre").value;
    apel=document.getElementById("apellido").value;
    correo=document.getElementById("mail").value;
    duda=document.getElementById("comentario").value;
    if(nom=="")
    {
        alert("Debes completar el campo Nombre");
    }else if(apel=="")
    {
        alert("Debes completar el campo Apellido");
    }else if(correo=="")
    {
        alert("Debes completar el campo E-mail");
    }else if(duda=="")
    {
        alert("Debes completar el campo de Consulta")
    }else
    {
        mensaje= apel + " " + nom + "\n" + "Su consulta se ha enviado exitosamente.";
        alert(mensaje);
    }

}