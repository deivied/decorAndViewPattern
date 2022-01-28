import { OptionCompose } from "./decoratorPattern/classes/optionCompose";
import { Simple } from "./decoratorPattern/classes/optionSimple";

const runTarif = document.querySelector('#nbrPerson') as HTMLInputElement;
const simpleCheckbox = document.querySelector('#simple') as HTMLInputElement;
const sejourCheckbox = document.querySelector('#sejour') as HTMLInputElement;
const restoCheckbox = document.querySelector('#resto') as HTMLInputElement;
const premenadeCheckbox = document.querySelector('#chameau') as HTMLInputElement;
const affichTarif = document.querySelector('.tarif-text') as HTMLDivElement;

const prixSimple = 25000;
const prixSejour = 25000;
const prixResto = 5000;
const prixChameau = 15000;

// let checkboxes = document.querySelectorAll('input[type="checkbox"]');

// for (let i = 0; i < checkboxes.length; i++) {
//     const element = checkboxes[i];
//     console.log(element);
    
// }

simpleCheckbox.addEventListener('change', (e : Event) =>{
    if (simpleCheckbox.checked) {
        let simpleVisite = new Simple(prixSimple);
        console.log('Check simple');
        affichTarif.innerText = 'Tarif :'+simpleVisite.prix() +'F CFA';
    }
    else {
        console.log('Uncheck simple');
        
        affichTarif.innerText = 'Tarif : 0';
    }
})

sejourCheckbox.addEventListener('change', (e: Event) => {
    if (sejourCheckbox.checked) {
        if (simpleCheckbox.checked) {
            let simpleVisite = new Simple(prixSimple);
            console.log('Check sejour');
            let plusSejour = new OptionCompose(simpleVisite, prixSejour);
            affichTarif.innerText = 'Tarif : '+plusSejour.prix() +'F CFA';
        }
        else{
            alert('Veuiller cocher la visite simple d\'abord')
            sejourCheckbox.checked = false;
        }

    }else{
        console.log('Uncheck sejour');
        affichTarif.innerText = 'Tarif : '+ prixSimple +'F CFA';
    }
})

// Creation d'evenement ;



runTarif.addEventListener('change', (event) =>{

});

