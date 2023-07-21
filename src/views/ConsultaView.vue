<template>
    <div id="ConsultaView">
        <h1>Consulta View</h1>
        <div id="contenedorPadre">
            <div class="contenedorHijo">
                <BuscadorComponent></BuscadorComponent>
            </div>
            <div class="contenedorHijo">
                <PokemonComponent></PokemonComponent>
            </div>
        </div>
        

    </div>
</template>

<script>
import BuscadorComponent from '@/components/BuscadorComponent.vue';
import PokemonComponent from '@/components/PokemonComponent.vue';
export default{
    name:'ConsultaView',
    components:{
        BuscadorComponent,
        PokemonComponent,
    },
    data:function(){
        return{

        }
    },
    methods:{},
    computed:{},
    watch:{}
}
</script>

<style scoped>
#ConsultaView{
    background-color: lightblue;
}

.contenedorHijo{
    display: inline-block;
}
</style>