<template>
	<div class="container-main">
		<v-card class="div-box" elevation="0" color="transparent">

			<div class="teste d-flex align-center justify-center pa-2 pt-4">
				<v-chip
					color="var(--orange)"
					label
					outlined
					large
				>
					Conheça nossos planos
				</v-chip>

			</div>
		</v-card>
	</div>
</template>

<script>
export default {
	name: 'Planos',
	data: ()=>{
		return{

		}
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

</style>