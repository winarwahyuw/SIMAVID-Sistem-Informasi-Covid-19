class CaseItem extends HTMLElement{
    set confirmedValue(params){
        this._params=params;
        this.innerHTML=`
        <dl class="row mb-0">
        <dt class="col-4">Confirmed</dt>
        <dd class="col-8">
            <p class="progress-bar bg-danger">${this._params.value}</p>
        </dd>
        </dl>
        
    `;
    }

    set recoveredValue(params){
        this._params=params;
        this.innerHTML=`
        <dl class="row mb-0">
        <dt class="col-4">Recovered</dt>
        <dd class="col-8">
            <p class="progress-bar bg-warning">${this._params.value}</p>
        </dd>
        </dl>
    `;
    }

    set deathValue(params){
        this._params=params;
        this.innerHTML=`
        <dl class="row mb-0">
        <dt class="col-4">Deaths</dt>
        <dd class="col-8">
            <p class="progress-bar bg-dark">${this._params.value}</p>
        </dd>
        </dl>
    `;
    }
}


customElements.define("case-item", CaseItem);