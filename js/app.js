window.addEventListener("DOMContentLoaded", () => {
    document.forms["location-form"].addEventListener('submit',onfindformsubmit);
});
var modelDeLigne='<td class="loc"><i class="glyphicon glyphicon-record"></i></td><td class="adr"></td><td class="coord"></td><td class="score"></td>';
/**
 * soumission du formulaire de recherche
 * @param {Event} evt 
 */
function onfindformsubmit(evt){
    //annulation du comprtaement par def.
    evt.preventDefault();
    //recup de la valeur du champ des recherche
    var locationValue=document.forms["location-form"]["locationInput"].value;
    console.log(locationValue);
    locationValue=encodeURIComponent(locationValue);
    console.log(locationValue);
    //constitution de l'adreese d'appel
    var url ='https://api-adresse.data.gouv.fr/search/?q='+locationValue;
    //xhr call
    xhr(url,function(reponseDeRequete){
        var mesResults=JSON.parse(reponseDeRequete);
        mesResults.features.forEach(element => {
            var trNode=document.createElement('tr');
            trNode.innerHTML=modelDeLigne;

            trNode.querySelector('.loc').innerHTML=monSvg;
            trNode.querySelector('.loc svg').addEventListener('click',function(event){
                mymap.setView([element.geometry.coordinates[1],element.geometry.coordinates[0]], 12);
            })
            trNode.querySelector('.adr').innerHTML=element.properties.label
            trNode.querySelector('.coord').innerHTML='x:'+element.geometry.coordinates[0]+'<br/>y:'+element.geometry.coordinates[1];
            trNode.querySelector('.score').innerHTML=(element.properties.score*10).toFixed(3)+'/10'

            document.querySelector('table').append(trNode);

            L.marker([element.geometry.coordinates[1],element.geometry.coordinates[0]]).addTo(mymap).bindPopup('<div style="">\
            <h2>'+element.properties.city+'</h2>\
            '+element.properties.label+'\
            </div>');
        });

    });
}