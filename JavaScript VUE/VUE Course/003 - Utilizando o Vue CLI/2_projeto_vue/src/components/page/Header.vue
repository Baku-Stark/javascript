<template>
    <nav>
        <ul>
            <li>
                <a href="#">
                    Home
                </a>
            </li>
            <li>
                <a href="#">
                    Projetos
                </a>
            </li>
            <li>
                <a href="#">
                    Contatos
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    /* [scoped] Apenas para este elemento */
    nav{
        width: 100%;
        
    }

    ul{
        display: flex;
        list-style: none;
        justify-content: space-around;
    }

    li a{
        font-size: 1.5rem;
        text-decoration: none;
    }

    li a:hover{
        text-decoration: underline;
    }
</style>

<script>
    export default{
        name: 'Header'
    }
</script>