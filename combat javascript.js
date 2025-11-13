//personnages
let kevin ={
    nom : "kevin" ,
    vie : 20,
    attaque : 6,
    precision : 0.5
}

let kratos ={
    nom : "kratos" ,
    vie : 30,
    attaque : 3,
    precision : 0.6
}


//fonction precision 
function precision (personnage){
    if(Math.random() < personnage.precision) {
        return  true 
        } else {
            return  false 
    }
}

//fonction attaque 
function attaque (personnage , cible ){
   if(precision (personnage)){
    cible.vie = cible.vie - personnage.attaque
    console.log (personnage.nom + "a attaqué" + cible.nom + "il reste" + cible.vie + "point de vie" + ".")
   } else {
    console.log( personnage.nom + "a raté son attaque contre" + cible.nom + ".")
   }
    }

//boucle combat 
while(kevin.vie > 0 && kratos.vie > 0){
    attaque ( kevin , kratos)
    if(kevin.vie <=0){
        console.log(kevin.nom + "est mort" +kratos.nom + "a gagné" )
        break
    }
    attaque (kratos , kevin)
    if(kratos.vie <=0){
        console.log(kratos.nom + "est mort" + kevin.nom + "a gagné")
        break
    }
}