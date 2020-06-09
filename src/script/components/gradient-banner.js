class GradientBanner extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot=this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }     

    render(){     
        this._shadowRoot.innerHTML=`
        <style>
            .gradient-banner{
                height: 240px;
                width: 100%;
                background: linear-gradient(#8e24aa, #6a0080);
                padding: 16px;
                margin-top: 30px;
            }
        </style>
        <div class="gradient-banner">
        </div>
        `;
    }
}

customElements.define("gradient-banner", GradientBanner);