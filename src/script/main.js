import './components/case-item.js';
import './components/search-bar.js';

function main(){

    const baseUrl="https://covid19.mathdro.id/api";

    const getGlobalCases=()=>{
        //panggil fetch
        fetch(baseUrl)
        .then(response=>{
            return response.json();
        })
        .then(responseJson=>{
            if(responseJson.error){
                showResponseMessage(responseJson.message);
            }else{
                renderConfirmedCases(responseJson.confirmed);
                renderRecoveredCases(responseJson.recovered);
                renderDeathCases(responseJson.deaths);
                renderLastUpdateCases(responseJson.lastUpdate);
            }
        })
        .catch(error=>{
            showResponseMessage(error);
        })
    }

    //global confirmed cases
    const renderConfirmedCases=(cases)=>{
        const itemElement=document.querySelector("#globalConfirmed"); 
        const caseItem=document.createElement("case-item");
        caseItem.confirmedValue=cases;
        itemElement.appendChild(caseItem);
    };

    const renderRecoveredCases=(cases)=>{
        const itemElement=document.querySelector("#globalRecovered");
        const caseItem=document.createElement("case-item");
        caseItem.recoveredValue=cases;
        itemElement.appendChild(caseItem);  
    }

    const renderDeathCases=(cases)=>{
        const itemElement=document.querySelector("#globalDeaths");
        const caseItem=document.createElement("case-item");
        caseItem.deathValue=cases;
        itemElement.appendChild(caseItem);  
    }

    const renderLastUpdateCases=(cases)=>{
        const itemElement=document.querySelector("#globalLastUpdate");
        const msec=Date.parse(cases);
        const lastUpdate=new Date(msec);
        itemElement.innerHTML=` 
                        <p class="last-update">Last Update : ${lastUpdate}</p>
                    `; 
    }

    const showResponseMessage=(message= "It's not us, It's your connection!")=>{
        alert(message);
    }

    //panggil
    getGlobalCases();   


    //untuk Country
    const baseUrlCountry="https://covid19.mathdro.id/api/countries";
    const searchElement=document.querySelector("search-bar");
    
    const getCountryCases=(key)=>{
        return fetch(`${baseUrlCountry}/${key}`)
        .then(response=>{
            return response.json();
        })
        .then(responseJson=>{
            if(responseJson.error){
                showResponseMessage(error);
            }else{
                renderConfirmed(responseJson.confirmed);
                renderRecovered(responseJson.recovered);
                renderDeaths(responseJson.deaths);
                renderLastUpdate(responseJson.lastUpdate);
            }
        })
        .catch(error=>{
            showResponseMessage(error.message);
        })
    }

    const renderConfirmed=(cases)=>{
        const listCaseElement=document.querySelector("#countriesConfirmed");
        const caseItem=document.createElement("case-item");
        caseItem.confirmedValue=cases;
        listCaseElement.appendChild(caseItem);
    }

    const renderRecovered=(cases)=>{
        const listCaseElement=document.querySelector("#countriesRecovered");
        const caseItem=document.createElement("case-item");
        caseItem.recoveredValue=cases;
        listCaseElement.appendChild(caseItem);           
    }

    const renderDeaths=(cases)=>{
        const itemElement=document.querySelector("#countriesDeaths");
        const caseItem=document.createElement("case-item");
        caseItem.deathValue=cases;
        itemElement.appendChild(caseItem);     
    }

    const renderMainResult=(key)=>{
        const itemElement=document.querySelector("#searchResult");
        itemElement.innerHTML=`
                        <p class="title">${key}</p>
                    `; 
    }

    const renderLastUpdate=(cases)=>{
        const itemElement=document.querySelector("#countriesLastUpdate");
        const msec=Date.parse(cases);
        const lastUpdate=new Date(msec);
        itemElement.innerHTML=` 
                        <p class="last-update">Last Update : ${lastUpdate}</p>
                    `; 
    }

    const btnSearchClicked=()=>{
        getCountryCases(searchElement.value);  
        renderMainResult(searchElement.value);      
    }

    searchElement.buttonClicked=btnSearchClicked;
  
}

export default main;