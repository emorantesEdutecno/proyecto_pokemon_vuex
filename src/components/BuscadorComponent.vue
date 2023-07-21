<template>
    <div id="BuscadorComponent">
        <h1>Buscador Component</h1>
        <form>
            <label for="txtNombre">Nombre:</label>
            <input type="text" id="txtNombre" name="txtNombre" v-model=nombre>
            <input type="button" id="btnBuscar" name="btnBuscar" v-on:click.prevent="procesarBusqueda" value="buscar">
        </form>
        {{  nombre }}
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default{
    name:'BuscadorComponent',
    data:function(){
        return{
            nombre:'',
        }
    },
    methods:{
        ...mapActions('pokemones',['consultarPokemon', 'pruebaAction']),
        procesarBusqueda: function(){
            this.consultarPokemon(this.nombre);
            this.nombre= '';
        },
    },
    computed:{},
    watch:{}
}
</script>

<style scoped>
#BuscadorComponent{
    background-color:darkolivegreen;
    margin: 2%;
}
</style>