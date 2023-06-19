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
    
<script>
    export default {
        data() {
        return {
            items: [
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
                    label: 'Profesor',
                    icon: 'pi pi-fw pi-id-card'
                },
                {
                    label: 'Estudiante',
                    icon: 'pi pi-fw pi-user'
                }
                ]
            },
            {
                label: 'Universidad',
                icon: 'pi pi-fw pi-globe',
                items: [
                {
                    label: 'Matricula',
                    icon: 'pi pi-fw pi-file-edit'
                },
                {
                    label: 'Curso',
                    icon: 'pi pi-fw pi-book'
                },
                {
                    label: 'Seccion',
                    icon: 'pi pi-fw pi-briefcase'
                },
                {
                    label: 'ProfesorSeccion',
                    icon: 'pi pi-fw pi-table'
                },
                {
                    label: 'Horario',
                    icon: 'pi pi-fw pi-calendar-times'
                },
                {
                    label: 'Asistencia',
                    icon: 'pi pi-fw pi-bookmark'
                },
                {
                    label: 'Participacion',
                    icon: 'pi pi-fw pi-check-circle'
                },
                {
                    label: 'Justificacion',
                    icon: 'pi pi-fw pi-align-justify'
                },
                ]
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
            ]
        };
        },
        methods: {
        // Agrega métodos personalizados aquí si es necesario
        }
    };
</script>
