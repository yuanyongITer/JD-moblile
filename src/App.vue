<template>
  	<div id="app">
    	<router-view/>
  	</div>
</template>

<script>

export default {
  	name: 'app'
}
</script>

<style lang='scss'>
  	@import '../src/assets/css/Layout';
  	@font-face
	{
		font-family: myFirstFont;
		src: url('../static/font/fontawesome-webfont.ttf'),
    		 url('../static/font/fontawesome-webfont.eot'),
    		 url('../static/font/fontawesome-webfont.svg')
    }
  	*{
  		margin: 0;
  		padding: 0;
  		font-family:myFirstFont;
  	}
</style>
