<template>
  <div class="container">

    <vue-particles
      color="#0a0f1d"
      :particleOpacity="0.28"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="2"
      linesColor="#0a0f1d"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.1"
      :linesDistance="220"
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
    
    <div class="d-flex justify-space-around align-center box-carrousel">
      
      
    </div>

    <div class="bottom-sm">
      <v-img
        alt="Linhas da parte de baixo da pagina"
        src="img/home-baixo.png"
        class="faixa-bottom"
      />

      <div>
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

        <div class="button-whatsapp d-flex">

          <v-btn
            href="https://api.whatsapp.com/send?phone=5567992345355&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos."
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

  .hover-icon,
  .icon-orange{
    color: var(--blue)!important;
    transition: 0.6s;
  }

  .box-carrousel{
    height: 200px;
    position: relative;
    right: 45px;
    top: 40px;
  }

  .carrousel{
    padding: 0;
  }

  .bottom-sm{
    position: relative;
  }

  .social-medias,
  .button-whatsapp{
    position: absolute;
    bottom: 15px;
    left: 120px;
    z-index: 2;
  }

  .icone-sm{
    margin-left: 3px;
    margin-right: 3px;
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