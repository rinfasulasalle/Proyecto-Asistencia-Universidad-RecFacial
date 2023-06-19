
<template>
    <div>
        <h1>Componente Menu</h1>
    </div>
    <div class="card relative z-2">
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="https://siberia.ulasalle.edu.pe/logo_ulasalle.gif" height="60" class="mr-2" />
            </template>
            <template #end>
                <InputText placeholder="Search" type="text" />
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        items: [
            {
                label: 'Intro',
                icon: 'pi pi-fw pi-align-justify',
            },
            {
                label: 'Base de datos',
                icon: 'pi pi-fw pi-database'
            },
            {
                separator: true
            },
            {
                label: 'Diagrama',
                icon: 'pi pi-fw pi-box'
            }
        ]
    },
    {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        items: [
            {
                label: 'GrupoUsuario',
                icon: 'pi pi-fw pi-user'
            },
            {
                label: 'Usuario',
                icon: 'pi pi-fw pi-user-plus'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);
</script>