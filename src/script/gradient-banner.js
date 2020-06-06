class GradientBanner extends HTMLElement{
    connectedCallback(){
        this.render();
    }     

    render(){     
        this.innerHTML=`
        <style>
            .gradient-banner{
                height: 250px;
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