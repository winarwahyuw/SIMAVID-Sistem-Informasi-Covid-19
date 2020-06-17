class CaseItem extends HTMLElement{
    set confirmedValue(confirmed){
        this._confirmed=confirmed;
        this.innerHTML=`
        <dl class="row mb-0">
        <dt class="col-4">Confirmed</dt>
        <dd class="col-8">
            <p class="progress-bar bg-danger">${this._confirmed.value}</p>
        </dd>
        </dl>
        
    `;
    }

    set recoveredValue(recovered){
        this._recover=recovered;
        this.innerHTML=`
        <dl class="row mb-0">
        <dt class="col-4">Recovered</dt>
        <dd class="col-8">
            <p class="progress-bar bg-warning">${this._recover.value}</p>
        </dd>
        </dl>
    `;
    }

    set deathValue(death){
        this._death=death;
        this.innerHTML=`
        <dl class="row mb-0">
        <dt class="col-4">Deaths</dt>
        <dd class="col-8">
            <p class="progress-bar bg-dark">${this._death.value}</p>
        </dd>
        </dl>
    `;
    }
}


customElements.define("case-item", CaseItem);