class SearchBar extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    //untuk button
    set buttonClicked(event){
        this._clicked=event;
        this.render();
    }

    get value(){
        return this.querySelector("#searchCountryElement").value;
    }

    render(){
        this.innerHTML=`
                    <div class="row p-2 my-2">
                        <div class="col-sm-9 col-md-9">
                            <input type="text" id="searchCountryElement" class="form-control" placeholder="Input Country">
                        </div>
                        <div class="col-sm-3 col-md-3">
                            <button type="submit" id="btnSearchCountry" class="btn btn-block btn-search">Search</button>
                        </div>
                    </div>
                    `;

        this.querySelector("#btnSearchCountry").addEventListener("click", this._clicked);
    }
}

customElements.define("search-bar", SearchBar);