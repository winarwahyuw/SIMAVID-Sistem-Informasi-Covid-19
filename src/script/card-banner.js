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
                <h5>AYO CEGAH PENULARAN COVID-19</h5>
                <p>
                Berikut ini data penyebaran kasus COVID-19 di dunia.
                Terapkan protokol kesehatan dan pencegahan COVID-19 mulai dari sekarang.
                Kenali gejalanya.
                Apabila mengalami gejala mirip COVID-19,
                segera pergi ke dokter atau rumah sakit rujukan terdekat.
                </p>
            </div>
            </div>
        </div> 
        `;
    }
}

customElements.define("card-banner", CardBanner);