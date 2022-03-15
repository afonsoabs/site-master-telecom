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
                  class="pl-2 pr-2 pt-2 pb-2 d-flex flex-column align-center justify-space-between box"
                  :class="hover ? 'hover-box' : ''"
                  @click="redirecionar('/contatos')"
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
      opacity="0.8"
      :value="overlay"
      color="#000"
    >

      <div class="d-flex flex-column full-overlay pa-8">

        <h2 class="h2-overlay pa-3">SELECIONE A SUA REGIÃO: </h2>

        <div class="d-flex">
          <div class="list">
            
            <ul>
              <li
                v-for="(regiao, index) in database_localidade"
                v-bind:key="index"
              >
              
                <v-hover v-slot="{hover}">
                  <span
                    :class="hover ? 'branco-forte' : ''"
                    @click="mudar_localidade(regiao)"
                  >
                    {{regiao}}
                  </span>
                </v-hover>
              </li>
            </ul>
          </div>

          <div class="loading">
            <v-loading></v-loading>
          </div>
        </div>
        
        
      </div>

    </v-overlay>
  </div>

</template>

<script>

  export default {
    name: 'Home',
    data: ()=>{
      return{
        overlay: true,
        localidade: null,
        save_localidade: false,

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
      
      redirecionar_link(link){
        this.overlay = !this.overlay;
        setInterval(()=>{
          window.location.href = link;
        }, 2000)
      },

      redirecionar(route) {
        this.$router.push({ path: route });
      },

      mudar_localidade(local){
        this.localidade = local;
        this.save_localidade = true;
        setTimeout(() => {

          localStorage.setItem('master_localidade_st', this.localidade);
          this.overlay = false;
        }, 2500);
      }
    },

    mounted(){
      if(localStorage.getItem('master_localidade_st') == 'null' || localStorage.getItem('master_localidade_st') == null){
        this.overlay = true;
      }

      else{
        this.overlay = false;
      }
    }
  }
</script>

<style scoped>

  /* Demonstrate a "mostly customized" scrollbar
  * (won't be visible otherwise if width/height is specified) */
  .list ul::-webkit-scrollbar {
    width: 0px!important;
    height: 2px!important;
    background-color: rgb(171, 171, 171); /* or add it to the track */
  }

  /* Add a thumb */
  .list ul::-webkit-scrollbar-thumb {
      background: rgb(109, 109, 109);
      height: 4px;
  }

  .branco-forte{
    color: rgba(255, 255, 255,0.9)!important;
    transition: 0.4s;
    font-weight: 800!important;
  }

  .full-overlay{
    width: 100vw;
    height: 100vh;
  }

    .list ul{
    height: 100%;
    padding-right: 1.2rem;
    padding-bottom: 2rem;
    overflow-y: scroll;
  }

  .list ul{
    list-style: none;
    margin-top: 2rem;
  }

  .list ul li span{
    display: block;
    padding: 1.2rem;
    padding-left: 0px;
    font-size: 2.9rem;
    text-transform: uppercase;
    color: rgba(255, 255, 255,0.5);
    font-weight: 700;
    transition: 0.4s;
    cursor: pointer;
  }

  .h2-overlay{
    font-size: 2.8rem;
    border-bottom: solid 1px rgba(255,255,255,0.24);
    text-shadow: 1px 4px 1px rgba(0, 0, 0, 0.9);
    font-weight: 900;

  }

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

  .box-center{
    border: solid 1px rgba(255,255,255,0.5);
    box-shadow: 0px 1px 3px rgba(255,255,255,0.4);
    width: 100%;
    
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

  @media screen and (max-width: 1280px) {

    .list ul::-webkit-scrollbar {
      width: 3px!important;
      height: 2px!important;
      background-color: rgb(138, 138, 138); /* or add it to the track */
    }
    .list ul{
      height: 500px!important;
    }
  }

</style>