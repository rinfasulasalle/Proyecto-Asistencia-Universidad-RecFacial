    <template>
        <div>
        <h1>ASISTENCIA CON CÁMARA</h1>
        <Button label="Abrir cámara" icon="pi pi-camera" @click="openDialog" />
        <Dialog :visible="dialogVisible" @hide="hideDialog">
            <div class="dialog-content">
            <Webcam ref="webcam" :width="videoWidth" :height="videoHeight" :mirror="false" />
            <Button label="Tomar foto" @click="takePhoto" />
            </div>
            <InputText v-model="dni" placeholder="Ingrese el DNI" />
        </Dialog>
        </div>
    </template>
    
    <script>
    import { Button, Dialog, InputText } from 'primevue/button';
    import { Webcam } from 'vue-web-cam';
    
    export default {
        components: {
        Button,
        Dialog,
        InputText,
        Webcam,
        },
        data() {
        return {
            dialogVisible: false,
            dni: null,
            videoWidth: 640,
            videoHeight: 480,
        };
        },
        methods: {
        openDialog() {
            this.dialogVisible = true;
        },
        hideDialog() {
            this.dialogVisible = false;
        },
        takePhoto() {
            const photoDataUrl = this.$refs.webcam.capture();
            // Hacer algo con la foto, por ejemplo enviarla a un servidor
        },
        },
    };
    </script>
    
    <style scoped>
    .dialog-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    </style>  