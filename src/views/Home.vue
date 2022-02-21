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
                >
                  <div
                    class="circle d-flex align-center justify-center"
                    :class="hover ? 'hover-circle' : ''"
                    @click="teste_link()"
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
                  class="pl-2 pr-2 pt-2 pb-2 d-flex flex-column align-center justify-space-between box"
                  :class="hover ? 'hover-box' : ''"
                  @click="redirecionar('/contato')"
                >
                  <div
                    class="circle d-flex align-center justify-center mb-2"
                    :class="hover ? 'hover-circle' : ''"
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
                    class="text-circle pb-3"
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
              min-width="420"
              min-height="420"
              class="carrousel"
              elevation="0"
            >
              <v-carousel
                cycle
                height="420"
                max-height="420"
                show-arrows-on-hover
                hide-delimiter-background
                hide-delimiters
                interval="2100"
              >
                <v-carousel-item
                  v-for="(fotos, i) in carrousel"
                  :key="i"
                >
                  <v-img
                    class="fill-height"
                    :src="carrousel[i]"
                    max-height="420"
                    max-width="420"
                  >
                  </v-img>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </div>

        </div>
        <div class="right-center-box">
          <h2 class="text-central">Central do assinante</h2>
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
                width="60"
                height="60"
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
      opacity="0.6"
      :value="overlay"
      color="var(--blue)"
    >

      <div class="d-flex flex-column align-center justify-center"> 
        <v-card
          width="400"
          height="300"
          color="var(--orange)"
          class="pa-4"
        >

          <div class="text-select-over d-flex flex-column justify-space-around" style="height: 100%;">
            <div>
              <span><b>Bem vindo!</b> <br /> Qual a sua localidade?</span>
            </div>

            <div>
              <v-autocomplete
                v-model="localidade"
                chips
                clearable
                small-chips
                dense
                filled
                :items="database_localidade"
                label="Selecione sua localidade"
                color="var(--blue)"
              ></v-autocomplete>

              <v-btn
                small
                color="white"
                outlined
                class="pa-4"
              >Acessar agora</v-btn>
            </div>
          </div>
        </v-card>
      </div>

    </v-overlay>
  </div>

</template>

<script>

  export default {
    name: 'Home',
    data: ()=>{
      return{
        overlay: false,
        localidade: null,

        carrousel: [
          'img/teste-1.jpg',
          'img/teste-2.jpg'
        ],

        database_localidade: [
				"Itaporã",
				"Dourados",
				"Montese",
				"Santa Terezinha",
				"Piraporã",
				"Carumbé",
			]
      }
    },

    methods: {

      overlay_home(){
        setTimeout(()=>{
          this.overlay = false;
        }, 2300)
      },

      teste_link(){
        alert('botão em construção');
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
    },

    mounted(){
      this.overlay = false;
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

  .top-over-sl{
    background: var(--blue);
  }

  .text-select-over b{
    font-size: 2rem;
    letter-spacing: 2px;
  }

  .text-select-over{
    font-size: 1.2rem;
    line-height: 25px;
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

</style>