<template>
	<div class="container-main">
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
							Selecione a cidade/distrito
						</v-chip>

						<v-autocomplete
							auto-select-first
							chips
							clearable
							deletable-chips
							small-chips
							:items="data_dist_cid"
							v-model="dist_cid_select"
							outlined
							color="white"
						></v-autocomplete>

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
							height="450"
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
										<div class="content-vantagens mt-8 mb-5">
											<div class="pt-1 pb-3 mt-1 d-flex align-center">
												<v-icon
													size="20"
													color="rgba(255,255,255,0.7)"
													class="mr-2"

												>
													mdi-wifi

												</v-icon>

												<span class="text-plan">Desempenho de alto nível</span>
											</div>

											<div class="pt-1 pb-3 mt-1 d-flex align-center">
												<v-icon
													size="20"
													color="rgba(255,255,255,0.7)"
													class="mr-2"

												>
													mdi-wan

												</v-icon>

												<span class="text-plan">100% Fibra Óptica</span>
											</div>

											<div class="pt-1 pb-3 mt-1 d-flex align-center">
												<v-icon
													size="20"
													color="rgba(255,255,255,0.7)"
													class="mr-2"

												>
													mdi-tablet-cellphone

												</v-icon>

												<span class="text-plan">Mais estabilidade</span>
											</div>

											<div class="pt-1 pb-3 mt-1 d-flex align-center">
												<v-icon
													size="20"
													color="rgba(255,255,255,0.7)"
													class="mr-2"

												>
													mdi-cloud-upload

												</v-icon>

												<span class="text-plan">Alta taxa de upload</span>
											</div>

											<div class="pt-1 pb-3 mt-1 d-flex align-center">
												<v-icon
													size="20"
													color="rgba(255,255,255,0.7)"
													class="mr-2"

												>
													mdi-cloud-download

												</v-icon>

												<span class="text-plan">Alta taxa de download</span>
											</div>
										</div>
									</div>

									<div class="button-plan pa-3 d-flex justify-center">
										<v-btn
											x-large
											class="bg-btn pa-3"
											height="40"
											color="rgba(255,255,255,0.9)"
											outlined
										>Solicitar contato</v-btn>
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

	}
}
</script>

<style scoped>

	.container-main{
		height: 100vh;
		width: 100%;
		background-image: linear-gradient(to right top, #0a0f1d, #0c162b, #0c1b3a, #0d204a, #112459);
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
		background-image: linear-gradient(to right top, #ed6300, #ee680b, #ee6d15, #ef721d, #ef7724, #ef7724, #ef7724, #ef7724, #ef721d, #ee6d15, #ee680b, #ed6300);
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
		color: var(--branco);
		font-size: 0.9rem;
	}

	.bg-btn{
		font-weight: 500;
	}

</style>