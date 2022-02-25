<template>
	<div class="container-main" :class="bg == 1 ? 'bg-1' : bg ==2 ? 'bg-2' : 'bg-3'">
		<v-card
			class="div-box"
			elevation="0"
			color="transparent"
		>

			<div class="teste d-flex flex-column align-start justify-center pa-2 pt-4">

				<div class="cidade-plano align-baseline">

					<div class="lista-cidade d-flex flex-column align-center justify-center pa-2 ml-5 mr-5">
						<v-chip
							label
							class="font-weight-bold ma-2 mb-5 text-center"
							color="var(--orange)"
							text-color="var(--branco)"
						>
							Sobre a localidade e a forma de contato
						</v-chip>

						<p class="mb-5 mt-3 text-justify" style="color: rgba(255,255,255,0.8);">	Os planos listados ao lado são para a região de <b class="laranja">Montese</b> conforme foi selecionado na pagina inicial. Ao clicar no botão de <b>solicitar contato</b>, você será redirecionado para o whatsApp de um de nossos consultores.</p>
						
						<v-btn
							dense
							large
							outlined
							color="white"
							class="mt-3"
							@click="redirecionar('/home')"
						>
							Retornar ao menu anterior
						</v-btn>
					</div>

					<v-divider vertical dark></v-divider>

					<div class="lista-planos d-flex flex-column align-center">

						<v-chip
							color="var(--orange)"
							label
							outlined
							large
						>
							Conheça nossos planos
						</v-chip>
						<carousel-3d
							height="470"
							width="320"
							perspective="40"
							
						>
							<slide
								v-for="(slide, i) in slides"
								:index="i"
								:key="i"
								class="mt-0 slide-plan"
							>

								<v-card
									elevation="0"
									class="card-plano pl-6 pr-6 pt-4 pb-4"
								>
								
									<div>
										<span
											class="d-flex flex-column text-uppercase font-weight-medium mb-4 text-top-plan"
										>
											Internet
											<strong
												class="font-weight-bold"
											>
												{{slide.mb}} MEGA
											</strong>
										</span>

										<v-divider style="border-color: var(--blue);"></v-divider>
									</div>

									<div class="vantagens-plan">
										<div class="content-vantagens mt-8 mb-2">
											<div class="pt-1 pb-3 mt-1 d-flex align-center">
												<v-icon
													size="20"
													color="#000"
													class="mr-2"

												>
													mdi-wifi

												</v-icon>

												<span class="text-plan" v-if="slide.mb != 500">Desempenho de alto nível</span>
												<span class="text-plan" v-else>Wi-fi de alta performance</span>

											</div>

											<div class="pt-1 pb-3 mt-1 d-flex align-center">
												<v-icon
													size="20"
													color="#000"
													class="mr-2"

												>
													mdi-wan

												</v-icon>

												<span class="text-plan">100% Fibra Óptica</span>
											</div>

											<div class="pt-1 pb-3 mt-1 d-flex align-center">
												<v-icon
													size="20"
													color="#000"
													class="mr-2"

												>
													mdi-tablet-cellphone

												</v-icon>

												<span class="text-plan">Mais estabilidade</span>
											</div>

											<div class="pt-1 pb-3 mt-1 d-flex align-center">
												<v-icon
													size="20"
													color="#000"
													class="mr-2"

												>
													mdi-cloud-upload

												</v-icon>

												<span class="text-plan">Alta taxa de upload</span>
											</div>

											<div class="pt-1 pb-3 mt-1 d-flex align-center">
												<v-icon
													size="20"
													color="#000"
													class="mr-2"

												>
													mdi-cloud-download

												</v-icon>

												<span class="text-plan">Alta taxa de download</span>
											</div>

											<div class="pt-1 mt-1 d-flex align-center" v-if="slide.mb == 500">
												<v-icon
													size="20"
													color="#000"
													class="mr-2"

												>
													mdi-wifi-plus

												</v-icon>

												<span class="text-plan">+ 1 Ponto adicional <b>WIFI PREMIUM</b></span>
											</div>
										</div>
									</div>

									<div class="button-plan pa-3 d-flex flex-column justify-center">
										<v-btn
											x-large
											class="bg-btn pa-3"
											height="40"
											color="var(--orange)"
										>Entrar em contato</v-btn>

										<span
											@click="redirecionar('/contatos')"
											class="text-center font-weight-medium caption mt-2 pb-2"
										>
											Quero que o vendedor me ligue
										</span>
									</div>
									
								</v-card>
							</slide>
					</carousel-3d>
					</div>
				</div>

			</div>

		</v-card>
	</div>
</template>

<script>
export default {
	name: 'Planos',
	data: ()=>{
		return{

			bg: 1,

			slides: [
				{
					mb: 500,
					src: 'https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg',
				},

				
				{
					mb: 300,
					src: 'https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg',
				},

				
				{
					mb: 200,
					src: 'https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg',
				},
			],



			data_dist_cid: [
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
		change_backgorund(){
			console.log('iniciando...');
			setInterval(() => {
				console.log(this.bg);
				this.bg = this.bg + 1;
				if(this.bg > 3){
					this.bg = 1;
				}

				console.log(this.bg);
			}, 3000);
		},

		redirecionar(route) {
			this.$router.push({ path: route });
		},
	},

	mounted(){
		this.change_backgorund();
	}
}
</script>

<style scoped>

	.container-main{
		height: 100vh;
		width: 100%;
	}

	.bg-1{
		
		background: url('../assets/fundo-planos.png') no-repeat center center;
		background-size: cover;;
	}

	.bg-2{
		
		background: url('../assets/fundo-planos2.png') no-repeat center center;
		background-size: cover;
	}

	.bg-3{

		background: url('../assets/fundo-planos3.png') no-repeat center center;
		background-size: cover;
	}

	.teste{
		height: 100vh;
	}

	.cidade-plano{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.lista-cidade{
		flex: 1;
		border-radius: 8px;
	}

	.lista-planos{
		flex: 4;	
	}

	.select-city{
		border: solid 1px var(--orange)!important;
		color: var(--branco);
	}

	.slide-plan{
		border: none;
		box-shadow: 1px 3px 3px #000;
	}

	.card-plano{
		height: 100%;
		width: 100%;
		border-radius: 0px;
		/* background-image: linear-gradient(to right top, #ed6300, #ee680b, #ee6d15, #ef721d, #ef7724, #ef7724, #ef7724, #ef7724, #ef721d, #ee6d15, #ee680b, #ed6300); */
		background: white;
	}

	.text-top-plan{
		font-size: 1.2rem;
		line-height: 35px;
	}

	.text-top-plan strong{
		color: #ed6300;
		font-size: 3.2rem;
		text-shadow: 1px 0 0 rgba(255,255,255,0.6), -1px 0 0 rgba(255,255,255,0.6), 0 1px 0 rgba(255,255,255,0.6), 0 -1px 0 rgba(255,255,255,0.6), 1px 1px rgba(255,255,255,0.6), -1px -1px 0 rgba(255,255,255,0.6), 1px -1px 0 rgba(255,255,255,0.6), -1px 1px 0 rgba(255,255,255,0.6);
	}

	.text-plan{
		color: #000;
		font-size: 0.9rem;
	}

	.bg-btn{
		font-weight: 500;
		width: 100%;
		color: white;
	}

	.laranja{
		color: var(--orange);
		font-weight: 700;
		font-size: 1.4rem;
	}
	
</style>