class CardBanner extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML=`
            <style>
                .card{
                    width: 100%;
                    height: 350px;
                    border-radius: 25px;
                    border-color: whitesmoke;
                    box-shadow: 0px 2px 2px rgb(167, 167, 167);
                    background-color: white;
                    margin-bottom: 25px;
                    overflow: hidden;
                }
                
                .card-banner{
                    position: relative;
                    margin-bottom: 30px;
                    margin-top: -150px;
                    padding: 0;
                }
                
                .card img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    align-content: center;
                }
                
                .card h5{
                    text-align: center;
                    font-family: sans-serif;
                }
                
                .card p{
                    margin-top: 16px;
                    text-align: justify;
                    word-spacing: 2px;
                    font-size: 12pt;
                    font-family: sans-serif;
                }
            </style>

            <div class="row card-banner">
                <div class="col-lg-7 col-sm-12">
                <div class="card">
                    <img src="/src/img/3652872.jpg" alt="Gambar Pencegahan COVID">
                </div>
                </div>
                <div class="col-lg-5 col-m-12">
                    <div class="card p-5">
                        <h5>
                        LET'S PREVENT COVID-19 TRANSMISSION</h5>
                        <p>
                        The following is data on the spread of COVID-19 cases in the world. 
                        Apply COVID-19 health and prevention protocol from now on. Recognize the symptoms. 
                        If you experience symptoms similar to COVID-19, 
                        immediately go to the doctor or the nearest referral hospital.
                        </p>
                    </div>
                </div>
            </div> 
        `;
    }
}

customElements.define("card-banner", CardBanner);