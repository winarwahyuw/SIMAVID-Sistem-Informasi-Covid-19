class TopNav extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML=`
                        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                            <div class="container mt-0">
                                <a class="navbar-brand" href="#">SIMAVID</a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <a class="nav-link" href="/index.html">Home</a>
                                    <a class="nav-link" href="#">Indication</a>
                                    <a class="nav-link" href="#">News</a>
                                </div>
                                </div>
                            </div>
                        </nav>
                        `;

    }
}

customElements.define("top-nav", TopNav);