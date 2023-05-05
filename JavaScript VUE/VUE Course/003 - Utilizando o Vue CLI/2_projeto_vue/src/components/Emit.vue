<template>
    <div>
        <h2>Emit</h2>
        <button @click="$emit('mudarImagem')">Trocar image do perfil</button>
    </div>
</template>

<script>
    export default{
        name: 'Emit',
        emits:[
            'mudarImagem'
        ]
    }
</script>