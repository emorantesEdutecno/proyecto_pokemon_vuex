import axios from 'axios';
const pokemones = {
    namespaced:true,
    state:{
        prueba:'elfar',
        datosPokemon:{},
        mostrarImagen: false,
    },
    getters:{},
    mutations:{
        CONSULTAR_POKEMON:(state, pokemones)=>{
            state.datosPokemon = pokemones;
        },
        MOSTRAR_IMAGEN:(state)=>{
            state.mostrarImagen = true;
        },
        OCULTAR_IMAGEN:(state)=>{
            state.mostrarImagen = false;
        },
    },
    actions:{
        consultarPokemon: (context, nombrePokemon)=>{
            context.commit('OCULTAR_IMAGEN');
            if(nombrePokemon === '' || nombrePokemon === null || nombrePokemon === undefined ){
                nombrePokemon = 'pikachu';
            }
            console.log('consultarPokemon');
            let url= 'https://pokeapi.co/api/v2/pokemon/'+nombrePokemon;
            axios.get(url)
                .then(respuesta=>{
                    console.log(respuesta);
                    context.commit('CONSULTAR_POKEMON', respuesta.data);
                    context.commit('MOSTRAR_IMAGEN');
                })
                .catch(err=>{
                    console.log(err);
                });

        },
        pruebaAction:()=>{
            console.log('pruebaAction');
        },
    },
    modules:{}
};

export default pokemones;