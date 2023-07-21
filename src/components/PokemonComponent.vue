<template>
    <div id="PokemonComponent">
        <h1>Pokemon Component</h1>
        <div id="contenedorPadre">
            <div class="contenedorHijo izquierda">
                {{  prueba  }}
                <table>
                    <tr>
                        <td>id:</td>
                        <td>{{ datosPokemon.id }}</td>
                    </tr>
                    <tr>
                        <td>Nombre:</td>
                        <td><strong>{{  datosPokemon.name }}</strong></td>
                    </tr>
                    <tr>
                        <td>Altura: {{  datosPokemon.height }}</td>
                        <td><strong></strong></td>
                    </tr>
                </table>
            </div>
            <div v-if="mostrarImagen" class="contenedorHijo derecha">
                <img v-bind:src="datosPokemon.sprites.front_default" v-bind:alt="datosPokemon.name">
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default{
    name:'PokemonComponent',
    data:function(){
        return{

        }
    },
    methods:{},
    computed:{
        ...mapState('pokemones',['prueba', 'datosPokemon', 'mostrarImagen']),
    },
    watch:{}
}
</script>

<style scoped>
#PokemonComponent{
    background-color:gold;
    margin: 2%;
}

.contenedorHijo{
    display: inline-block;
}

.izquierda{
    background-color: lightgreen;
}

.derecha{
    background-color: lightcoral;
}
</style>