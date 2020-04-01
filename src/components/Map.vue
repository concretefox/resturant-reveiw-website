<template>
<v-app>
<v-content>
<v-container>

<h3>My Google Maps Demo</h3>
<!--The div element for the map -->
<div id="map"></div>

    

</v-container>

</v-content>
</v-app>    
</template>


<script>
import axios from 'axios';

geocode();

function geocode () {
	let location = "55 Heartford Close, Warrington, England";
	// HTTP request using Axios //
	// backend get request url //	
	axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
	params: {
	address: location, 
	key: 'AIzaSyDeMyvnJ3W-Lu2Hxm8gbpAxKHeSEGMZ7Lw',
	}
	})
	
	// captures the GET request response //
	.then(function (response) {
	console.log(response);
	})

	// if an error occurs catch it here//
	.catch(function (error){
	console.log(error);
	});

}


export default {
    
name: "Map",
data () {
    return {
    }
},

// Using a hook to run fetch method only when the component is loaded
created () {
},


};
</script>


<style scoped

#map {
width: 100%;
height: 400px;
background-color: grey;
}

</style>