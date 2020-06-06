function main(){

    const baseUrl="https://covid19.mathdro.id/api";
    const API_KEY="5ec518cd0e3a58bbeb7141f9a3e8be78";
    const movieUrl="https://api.themoviedb.org/3/discover/movie?api_key=5ec518cd0e3a58bbeb7141f9a3e8be78&language=en-US&page=1";

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
                renderImage(responseJson.image);
            }
        })
        .catch(error=>{
            showResponseMessage(error);
        })
    }

    //global confirmed cases
    const renderConfirmedCases=(cases)=>{
        const listCaseElement=document.querySelector("#globalConfirmed");
        listCaseElement.innerHTML+=`
                                <div>
                                <h5>Confirmed</h5>
                                <p>${cases.value}</p>
                                <p>${cases.detail}</p>
                                </div>
                                `;
    };

    const renderRecoveredCases=(cases)=>{
        const itemElement=document.querySelector("#globalConfirmed");
        itemElement.innerHTML +=`
                                <div>
                                <h5>Recovered</h5>
                                <p>${cases.value}</p>
                                <p>${cases.detail}</p>
                                </div>
                                `;
    }

    const renderDeathCases=(cases)=>{
        const itemElement=document.querySelector("#globalConfirmed");
        itemElement.innerHTML +=`
                                <div>
                                <h5>Deaths</h5>
                                <p>${cases.value}</p>
                                <p>${cases.detail}</p>
                                </div>
                                `;
    }

    const renderImage=(cases)=>{
        const itemElement=document.querySelector("#globalConfirmed");
        itemElement.innerHTML +=`
                                <div>
                                    <img src="${cases}" alt="Grafik" width="100%">
                                </div>
                                `;
    }
    const showResponseMessage=(message= "It's not us, It's your connection!")=>{
        alert(message);
    }

    //panggil fungsi data
    getGlobalCases();
}

export default main;