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

						<div class="d-flex flex-column align-center">
							<v-btn
								small
								color="transparent"
								class="ma-2 pa-1 select-city"
								min-width="160"
								@click="selecionar_planos()"
							>
								Dourados
							</v-btn>

							<v-btn
								small
								color="transparent"
								class="ma-2 pa-1 select-city"
								min-width="160"
							>
								Itaporã
							</v-btn>
							
							<v-btn
								small
								color="transparent"
								class="ma-2 pa-1 select-city"
								min-width="160"
							>
								Montese
							</v-btn>
							
							<v-btn
								small
								color="transparent"
								class="ma-2 pa-1 pa select-city"
								min-width="160"
							>
								Guairicus
							</v-btn>

							<v-btn
								small
								color="transparent"
								class="ma-2 pa-1 select-city"
								min-width="160"
							>
								Dourados
							</v-btn>

							<v-btn
								small
								color="transparent"
								class="ma-2 pa-1 select-city"
								min-width="160"
							>
								Itaporã
							</v-btn>
							
							<v-btn
								small
								color="transparent"
								class="ma-2 pa-1 select-city"
								min-width="160"
							>
								Montese
							</v-btn>
							
							<v-btn
								small
								color="transparent"
								class="ma-2 pa-1 pa select-city"
								min-width="160"
							>
								Guairicus
							</v-btn>

						</div>

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
							perspective="10"
						>
							<slide
								v-for="(slide, i) in slides"
								:index="i"
								:key="i"
								class="mt-0"
								style="border: none;"
							>

								<v-card
									:color="slide.color"
									elevation="0"
									class="card-plano"
								>
									teste
									
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
					color: 'red',
					src: 'https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg',
				},

				{
					color: 'blue',
					src: 'https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg',
				},

				{
					color: 'green',
					src: 'https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg',
				},
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

	.card-plano{
		height: 100%;
		width: 100%;
		border-radius: 0px;
	}

</style>