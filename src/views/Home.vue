<template>
  <div class="container">

    <vue-particles
      color="#0a0f1d"
      :particleOpacity="0.28"
      :particlesNumber="90"
      shapeType="circle"
      :particleSize="2"
      linesColor="#0a0f1d"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.1"
      :linesDistance="250"
      :moveSpeed="2.3"
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
    
    <div class="d-flex justify-space-around align-center box-carrousel">
      
      <div class="d-flex mt-15 ml-14 box-menu">

        <v-hover
          v-slot="{ hover }"
        >
          <div
            class="pl-4 pr-4 pt-2 pb-2 mr-5 ml-5 d-flex flex-column align-center justify-center box"
            :class="hover ? 'hover-box' : ''"
          >
            <div
              class="circle d-flex align-center justify-center mb-2"
              :class="hover ? 'hover-circle' : ''"
            >
              <v-icon
                size="60"
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
              Sobre a empresa
            </span>
          </div>
        </v-hover>

        <v-divider vertical></v-divider>

        <v-hover
          v-slot="{ hover }"
        >
          <div
            class="pl-4 pr-4 pt-2 pb-2 mr-5 ml-5 d-flex flex-column align-center justify-center box"
            :class="hover ? 'hover-box' : ''"
          >
            <div
              class="circle-orange d-flex align-center justify-center mb-2"
              :class="hover ? 'hover-circle' : ''"
            >
              <v-icon
                size="60"
                class="icon-orange"
                :class="hover ? 'hover-icon' : ''"
              >
                mdi-text-box-check-outline
              </v-icon>
            </div>

            <span
              class="text-circle"
              :class="hover ? 'text-circle-hover' : ''"
            >
              Conhecer os planos
            </span>
          </div>
        </v-hover>

        <v-divider vertical></v-divider>

        <v-hover
          v-slot="{ hover }"
        >
          <div
            class="pl-4 pr-4 pt-2 pb-2 mr-5 ml-5 d-flex flex-column align-center justify-center box"
            :class="hover ? 'hover-box' : ''"
          >
            <div
              class="circle d-flex align-center justify-center mb-2"
              :class="hover ? 'hover-circle' : ''"
            >
              <v-icon
                size="60"
                class="icon"
                :class="hover ? 'hover-icon' : ''"
              >
                mdi-face-agent
              </v-icon>
            </div>

            <span
              class="text-circle text-center"
              :class="hover ? 'text-circle-hover' : ''"
            >
              Solicitar Suporte
            </span>
          </div>
        </v-hover>
      </div>

      <v-card
        min-width="390"
        min-height="390"
        class="carrousel"
      >
        <v-carousel
          cycle
          height="390"
          max-height="390"
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
              max-height="390"
              max-width="390"
            >
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </div>

    <div class="bottom-sm">
      <v-img
        alt="Linhas da parte de baixo da pagina"
        src="img/home-baixo.png"
        class="faixa-bottom"
      />

      <div class="social-medias d-flex align-center">
        <div class="circle-social-medias d-flex align-center justify-center">
          <v-icon
            size="35"
            class="icon-orange"
          >
            mdi-facebook
          </v-icon>
        </div>
        <div class="circle-social-medias"></div>
        <div class="circle-social-medias"></div>
        <div class="circle-social-medias"></div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'Home',
    data: ()=>{
      return{
        carrousel: [
          'img/teste-1.jpg',
          'img/teste-2.jpg'
        ]
      }
    }

  }
</script>

<style scoped>

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
    z-index: 1;
  }

  .box-menu,
  .carrousel{
    border-radius: 8px;
    z-index: 2;
    padding: 0.3rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    box-shadow: var(--shadow);
    background: rgba(255, 255, 255,0.65);
  }

  .circle,
  .circle-orange{
    width: 80px;
    height: 80px;
    background: var(--blue);
    border-radius: 50%;
    transition: 0.6s;
  }

  .hover-circle{
    background: var(--orange);
    transition: 0.6s;
  }

  .circle-orange{
    background: var(--orange);
  }

  .text-circle{
    font-size: 1.2rem;
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

  .box{
    transition: 0.6s;
    transform: scale(1);
    border-radius: 4px;
    cursor: pointer;
  }

  .hover-box{
    transition: 0.6s;
    transform: scale(1.15);
  }

  .icon{
    color: var(--branco)!important;
    transition: 0.6s;
  }

  .hover-icon{
    color: var(--blue)!important;
    transition: 0.6s;
  }
  
  .icon-orange{
    color: var(--blue)!important;
    transition: 0.6s;
  }

  .box-carrousel{
    height: 200px;
    position: relative;
    right: 45px;
  }

  .carrousel{
    padding: 0;
  }

  .bottom-sm{
    position: relative;
  }

  .social-medias{
    position: absolute;
    bottom: 15px;
    right: 40px;
  }

  .circle-social-medias{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--orange);
    margin-left: 8px;
    margin-right: 8px;
  }

</style>