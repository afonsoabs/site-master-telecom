<template>
  <div style="height: 100%;">

    <div class="container">
      <vue-particles
        color="#0a0f1d"
        :particleOpacity="0.28"
        :particlesNumber="85"
        shapeType="circle"
        :particleSize="2"
        linesColor="#0a0f1d"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.1"
        :linesDistance="160"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="content-particles"
      >
      </vue-particles>

      <div class="d-flex align-center container-top">
        <v-img
          alt="Linhas da parte de cima da pagina"
          cover
          src="img/home-cima.png"
          class="faixa-top"
        />
      </div>
      
      <div class="d-flex center-page">
        <div class="left-center-box d-flex align-center justify-center">

          <div class="reduction d-flex justify-space-around align-center">
            <div class="d-flex box-menu">

              <v-hover
                v-slot="{ hover }"
              >
                <div
                  class="pl-2 pr-2 pt-2 pb-2 d-flex flex-column align-center justify-space-between box"
                  :class="hover ? 'hover-box' : ''"
                  @click="redirecionar('/sobre')"
                >
                  <div
                    class="circle d-flex align-center justify-center"
                    :class="hover ? 'hover-circle' : ''"
                  >
                    <v-icon
                      size="40"
                      class="icon"
                      :class="hover ? 'hover-icon' : ''"
                    >
                      mdi-book-open-variant
                    </v-icon>
                  </div>

                  <span
                    class="text-circle"
                    :class="hover ? 'text-circle-hover' : ''"
                  >
                    Sobre a master
                  </span>
                </div>
              </v-hover>

              <v-divider vertical></v-divider>

              <v-hover
                v-slot="{ hover }"
              >
                <div
                  class="pl-2 pr-2 pt-2 pb-2 d-flex flex-column align-center justify-space-between box"
                  :class="hover ? 'hover-box' : ''"
                  @click="redirecionar('/planos')"
                >
                  <div
                    class="circle-orange d-flex align-center justify-center"
                    :class="hover ? 'hover-circle' : ''"
                  >
                    <v-icon
                      size="40"
                      class="icon-orange"
                      :class="hover ? 'hover-icon' : ''"
                    >
                      mdi-text-box-check-outline
                    </v-icon>
                  </div>
                  <v-divider></v-divider>
                  <span
                    class="text-circle pb-3"
                    :class="hover ? 'text-circle-hover' : ''"
                  >
                    Planos
                  </span>
                </div>
              </v-hover>

              <v-divider vertical></v-divider>

              <v-hover
                v-slot="{ hover }"
              >
                <div
                  class="pl-2 pr-2 pt-2 pb-2 d-flex flex-column align-center justify-space-between box destaque-box"
                  :class="hover ? 'hover-box' : ''"
                  @click="redirecionar('/contatos')"
                >
                  <div
                    class="circle d-flex align-center justify-center mb-2"
                    :class="hover ? 'destaque-hover-circle' : ''"
                  >
                    <v-icon
                      size="40"
                      class="icon"
                      :class="hover ? 'hover-icon' : ''"
                    >
                      mdi-phone-message
                    </v-icon>
                  </div>

                  <span
                    class="text-circle pb-3 destaque-text-circle"
                    :class="hover ? 'text-circle-hover' : ''"
                  >
                    Contato
                  </span>
                </div>
              </v-hover>

              <v-divider vertical></v-divider>

              <v-hover
                v-slot="{ hover }"
              >
                <div
                  class="pl-2 pr-2 pt-2 pb-2 d-flex flex-column align-center justify-center box"
                  :class="hover ? 'hover-box' : ''"
                  @click="redirecionar_link('http://sgp.master.net.br:8000/accounts/central/login')"
                >
                  <div
                    class="circle-orange d-flex align-center justify-center mb-2"
                    :class="hover ? 'hover-circle' : ''"
                  >
                    <v-icon
                      size="40"
                      class="icon-orange"
                      :class="hover ? 'hover-icon' : ''"
                    >
                      mdi-face-agent
                    </v-icon>
                  </div>

                  <span
                    class="text-circle text-center text-circle"
                    :class="hover ? 'text-circle-hover' : ''"
                  >
                    Central do assinante
                  </span>
                </div>
              </v-hover>
            </div>

            <v-card
              max-width="430"
              min-height="500"
              min-width="430"
              max-height="500"
              elevation="5"
              class="main-contato"
              :class="change_contato == true ? 'rotate-y-contato' : ''"
            >

              <div class="front-contato">
                <div class="contato-top">
                  <span>Fale conosco</span>
                  <p>Aqui estão as formas de contato que você pode utilizar para contatar a <b>Master Telecom!</b></p>
                </div>

                <div class="card-group-ctt">
                  <h4>Telefones:</h4>

                  <div class="card-ctt d-flex align-center mt-2 mb-1">
                    <v-icon
                      size="24"
                      color="#000"
                      class="mr-1"
                    >
                      mdi-phone
                    </v-icon>

                    <span class="font-weight-medium"><b>Fixo: </b>(67) 3451-1195</span>
                  </div>

                  
                  <div class="card-ctt d-flex align-center mt-2 mb-1">
                    <v-icon
                      size="24"
                      color="#000"
                      class="mr-1"
                    >
                      mdi-phone
                    </v-icon>

                    <span class="font-weight-medium"><b>Celular (vivo): </b>(67) 99607-3034</span>
                  </div>

                  
                  <div class="card-ctt d-flex align-center mt-2 mb-1">
                    <v-icon
                      size="24"
                      color="#000"
                      class="mr-1"
                    >
                      mdi-phone
                    </v-icon>

                    <span class="font-weight-medium"><b>SAC: </b>(67) 0800 674 1195</span>
                  </div>

                  <v-btn
                    small
                    class="mt-2"
                    color="var(--orange)"
                    @click="troca_contato()"
                  >
                    <span class="white--text">Ver consultores</span>
                  </v-btn>
                </div>

                <div class="contato-top">
                  <p>Ou também se preferir você pode solicitar uma visita de nossos técnicos sem precisar nos ligar. Basta clicar no botão da central do assiannte à esquerda ou no botão abaixo!</p>

                  <v-btn
                    large
                    class="mt-1 button-central-ass"
                    color="var(--orange)"
                  >
                    <span class="white--text">Central do Assinante</span>
                  </v-btn>
                </div>
              </div>

              <div class="back-contato">
                <div class="contato-top">
                  <span>Fale com um consultor</span>
                  <p>Aqui estão os telefones de todos os nossos consultores de vendas, todos ativos das <b>07:30h</b> da manhã até <b>18:00h</b> da noite!</p>
                </div>

                <div class="card-group-ctt">
                  <h4>Telefones:</h4>

                  <div class="card-ctt d-flex align-center mt-2 mb-1">
                    <v-icon
                      size="24"
                      color="#000"
                      class="mr-1"
                    >
                      mdi-phone
                    </v-icon>

                    <span class="font-weight-medium"><b>Gledson: </b>(67) 99170-8000</span>
                  </div>

                  
                  <div class="card-ctt d-flex align-center mt-2 mb-1">
                    <v-icon
                      size="24"
                      color="#000"
                      class="mr-1"
                    >
                      mdi-phone
                    </v-icon>

                    <span class="font-weight-medium"><b>Isadora: </b>(67) 99644-4530</span>
                  </div>

                  
                  <div class="card-ctt d-flex align-center mt-2 mb-1">
                    <v-icon
                      size="24"
                      color="#000"
                      class="mr-1"
                    >
                      mdi-phone
                    </v-icon>

                    <span class="font-weight-medium"><b>André: </b>(67) 99287-3001</span>
                  </div>

                  <div class="card-ctt d-flex align-center mt-2 mb-1">
                    <v-icon
                      size="24"
                      color="#000"
                      class="mr-1"
                    >
                      mdi-phone
                    </v-icon>

                    <span class="font-weight-medium"><b>Éric: </b>(67) 99215-3303</span>
                  </div>

                  <v-btn
                    small
                    color="var(--orange)"
                    @click="troca_contato()"
                  >
                    <span class="white--text">Contatos do escritório</span>
                  </v-btn>
                </div>

                <div class="contato-top">
                  <p>Ou também se preferir você pode solicitar uma visita de nossos técnicos sem precisar nos ligar. Clique no botão abaixo:</p>

                  <v-btn
                    large
                    class="button-central-ass"
                    color="var(--orange)"
                  >
                    <span class="white--text">Central do Assinante</span>
                  </v-btn>
                </div>
              </div>

            </v-card>
          </div>
        </div>
      </div>

      <div class="bottom-sm">
        <v-img
          alt="Linhas da parte de baixo da pagina"
          src="img/home-baixo.png"
          class="faixa-bottom"
        />

        <div>

          <div class="bottom-frase">
            <span>Nosso plano é você sempre <b>CONECTADO!</b></span>
          </div>
          <div class="button-whatsapp d-flex">

            <div class="social-medias d-flex align-center">
            
              <v-hover
                v-slot="{ hover }"
              >

                <v-btn
                  href="https://www.facebook.com/mastertelecom/"
                  target="_blank"
                  color="transparent"
                  elevation="0"
                  width="40"
                >
                  <v-img
                    width="45"
                    height="45"
                    src="img/icons2/facebook.png"
                    class="icone-sm"
                    :class="hover ? 'icone-sm-hover' : ''"
                  >
                  </v-img>
                </v-btn>
              </v-hover>

              <v-hover
                v-slot="{ hover }"
              >

                <v-btn
                  href="https://www.instagram.com/master.telecom/"
                  target="_blank"
                  color="transparent"
                  elevation="0"
                  width="40"
                >
                  <v-img
                    width="35"
                    height="35"
                    src="img/icons2/instagram.png"
                    class="icone-sm"
                    :class="hover? 'icone-sm-hover' : ''"
                  >
                  </v-img>
                </v-btn>
              </v-hover>
            </div>

            <v-btn
              href="https://api.whatsapp.com/send?phone=5508006471195&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos."
              target="_blank"
              color="transparent"
              elevation="0"
              width="40"
            >
              <v-img
                width="65"
                height="65"
                src="img/icons2/whatsApp.png"
                class="icon-sm-wpp"
              >
              </v-img>
            </v-btn>
          </div>
        </div>
      </div>
    </div>

    <v-overlay
      opacity="1"
      :value="overlay"
      color="var(--blue)"
    >

      <div class="d-flex flex-column align-center justify-center">
        <v-img
          max-width="300"
          src="img/logo.png"
          class="pulse-logo mb-10"
          transition="scale-transition"
          contain
        >


        </v-img>
        <v-progress-circular indeterminate size="30" color="var(--orange)">
        </v-progress-circular>
        <span class="caption">Carregando...</span>
      </div>

    </v-overlay>
  </div>

</template>

<script>

  export default {
    name: 'Contato',
    data: ()=>{
      return{
        overlay: false,
        change_contato: false,
        carrousel: [
          'img/teste-1.jpg',
          'img/teste-2.jpg'
        ]
      }
    },

    methods: {

      overlay_home(){
        setTimeout(()=>{
          this.overlay = false;
        }, 2300)
      },

      redirecionar_link(link){
        this.overlay = !this.overlay;
        setInterval(()=>{
          window.location.href = link;
        }, 2000)
      },

      redirecionar(route) {
        this.$router.push({ path: route });
      },

      troca_contato(){
        this.change_contato = !this.change_contato;
      }
    },

    mounted(){
      this.overlay_home();
    }
  }
</script>

<style scoped>

  .pulse-logo{
    animation: wpp 2.1s infinite ease-in-out;
  }

  .reduction{
    width: 100%;
  }

  .v-card--reveal{
    align-items: center;
    left: 0;
    justify-content: center;
    position: absolute;
    width: 150px;
  }

  .container{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  .content-particles{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .box-menu,
  .carrousel{
    border-radius: 8px;
    z-index: 2;
    box-shadow: var(--shadow);
    background: rgba(255, 255, 255,0.75);
    padding-right: 0;
  }

  .circle,
  .circle-orange{
    width: 60px;
    height: 60px;
    background: var(--blue);
    border-radius: 50%;
    transition: 0.6s;
  }

  .hover-circle{
    background: var(--orange);
    transition: 0.6s;
  }

  .destaque-hover-circle{
    background: var(--red);
    transition: 0.6s;
    border: solid 1px var(--blue);
  }

  .circle-orange{
    background: var(--orange);
  }

  .text-circle{
    font-size: 1.03rem;
    font-weight: 500;
    text-transform: uppercase;
    display: block;
    width: 110px;
    line-height: 24px;
    text-align: center;
    transition: 0.6s;
  }

  .text-circle-hover{
    font-weight: 700;
    transition: 0.6s;
  }

  .destaque-text-circle{
    font-weight: 900;
    color: var(--branco);
  }

  .box{
    transition: 0.6s;
    transform: scale(1);
    border-radius: 4px;
    cursor: pointer;
    padding: 0.3rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
  }

  .hover-box{
    transition: 0.6s;
    transform: scale(1.1);
  }

  .destaque-box{
    background: var(--orange);
    transition: 0.6s;
  }

  .hover-destaque-box{
    background: var(--blue);
    transition: 0.6s;
  }

  .icon{
    color: var(--branco)!important;
    transition: 0.6s;
  }

  .hover-icon,
  .icon-orange{
    color: var(--blue)!important;
    transition: 0.6s;
  }

  .container-top{
    z-index: 1;
  }

  .center-page{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .left-center-box{
    height: 100%;
    flex: 3;
  }

  .right-center-box{
    background: var(--orange);
    flex: 1;
    display: none;
  }

  .box-carrousel{
    height: 200px;
    position: relative;
    right: 45px;
    top: 40px;
  }

  .carrousel{
    padding: 0;
    background: transparent;
    box-shadow: unset;
    margin-bottom: 90px;
  }

  .bottom-sm{
    position: relative;
  }

  .social-medias{
    margin-right: 20px;
    margin-top: 10px;
  }

  .button-whatsapp{
    position: absolute;
    bottom: 15px;
    left: 120px;
    z-index: 2;
  }

  .icone-sm{
    cursor: pointer;
  }

  .button-whatsapp{
    left: unset;
    right: 40px;
    bottom: 30px;
    cursor: pointer;
  }

  .icon-sm-wpp{
    animation: wpp 1s infinite ease-in-out;
  }

  .text-central{
    color: var(--branco);
    text-transform: uppercase;
    text-align: center;
    padding: 15px;
    font-weight: 900;
    font-size: 1.3rem;
  }

  .bottom-frase{
    color: var(--branco);
    text-transform: uppercase;
    font-weight: 400;
    position: absolute;
    bottom: 30px;
    left: 130px;
    width: 350px;
    text-align: center;
  }

  .bottom-frase span{
    letter-spacing: 4px;
    font-size: 0.8rem;
    line-height: 3px;
  }

  .bottom-frase span b{
    font-weight: 900;
    font-size: 1.2rem;
    letter-spacing: 6px;
  }

  @keyframes wpp{
    
    0%{
      transform: scale(1);
      transition: 1s;
    }

    50%{
      transform: scale(1.1);
      transition: 1s;
    }

    100%{
      transform: scale(1);
      transition: 1s;
    }
  }


  .main-contato{
    transform-style: preserve-3d;
    transition: all 0.5s ease;
    z-index: 5;
    margin-bottom: 80px;
    position: relative;
  }
  .rotate-y-contato{
    transform: rotateY(180deg);
  }

  .front-contato{
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .back-contato{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
  }

  .contato-top{
    font-weight: 700;
    font-size: 1.7rem;
    padding: 10px;
    text-align: center;
  }

  .contato-top p{
    font-size: 0.9rem;
    font-weight: 300;
    padding: 0;
    display: block;
    width: 90%;
    margin: 0 auto;
    padding: 5px;
    text-align: left;
  }

  .contato-top p b{
    font-size: 1.2rem;
    color: var(--orange);
    font-weight: 700;
  }

  .card-group-ctt{
    padding: 10px;
    padding-top: 0;
    padding-bottom: 15px;
    width: 90%;
    margin: 0 auto;
    margin-top: 5px;
  }
  
  .card-ctt span{
    font-size: 0.9rem;
  }

  .button-central-ass{
    animation: pulse 2.6s infinite ease-in-out;
  }

  @keyframes pulse {
    0%{
      transform: scale(1);
    }

    50%{
      transform: scale(1.03);
    }

    100%{
      transform: scale(1);
    }
  }
</style>
