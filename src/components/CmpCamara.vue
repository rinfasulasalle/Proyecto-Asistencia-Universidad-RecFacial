<template>
    <div class="componente">
      <h2 class="difuminado">Registros de Asistencia</h2>
      <div v-if="!cameraOpen">
        <Button @click="openCamera" icon="pi pi-camera" label="Abrir cámara" />
      </div>
      <div v-else>
        <video ref="videoElement" width="640" height="480" @loadedmetadata="onVideoLoaded"></video>
        <div>
          <Button @click="closeCamera" icon="pi pi-times" label="Cerrar cámara" />
          <Button @click="takePhoto" icon="pi pi-camera" label="Tomar foto" />
        </div>
        <div v-if="photoTaken">
          <img :src="photoUrl" alt="Foto de asistencia" />
        </div>
        <InputText v-model.trim="dni" placeholder="Ingrese su DNI" />
        <p>Hora actual: {{ getCurrentTime() }}</p>
        <Button @click="submitForm" label="Enviar" />
      </div>
      <Dialog v-if="showDialog" header="Asistencia Registrada" visible>
        ¡La asistencia se tomó correctamente!
      </Dialog>
    </div>
  </template>
  
  <script>
  import { ref, nextTick } from 'vue';
  import { Dialog, Button, InputText } from 'primevue/dialog';
  
  export default {
    components: {
      Dialog,
      Button,
      InputText,
    },
    data() {
      return {
        videoElement: null,
        photoTaken: false,
        photoUrl: '',
        dni: '',
        showDialog: false,
        cameraOpen: false,
      };
    },
    mounted() {
      this.videoElement = this.$refs.videoElement;
    },
    methods: {
      openCamera() {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          this.videoElement.srcObject = stream;
          nextTick(() => {
            this.videoElement.play();
          });
          this.cameraOpen = true;
        });
      },
      closeCamera() {
        const stream = this.videoElement.srcObject;
        const tracks = stream.getTracks();
  
        tracks.forEach((track) => {
          track.stop();
        });
  
        this.videoElement.srcObject = null;
        this.cameraOpen = false;
      },
      takePhoto() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = this.videoElement.videoWidth;
        canvas.height = this.videoElement.videoHeight;
        context.drawImage(
          this.videoElement,
          0,
          0,
          canvas.width,
          canvas.height
        );
        this.photoUrl = canvas.toDataURL('image/png');
        this.photoTaken = true;
      },
      getCurrentTime() {
        const currentTime = new Date();
        return currentTime.toLocaleTimeString();
      },
      submitForm() {
        if (this.dni.length > 0 && this.dni.length <= 8) {
          this.showDialog = true;
        } else {
          alert('Ingrese un DNI válido (máximo 8 cifras)');
        }
      },
      onVideoLoaded() {
        nextTick(() => {
          this.videoElement.play();
        });
      },
    },
  };
</script>

<style>
    .botones {
    margin-top: 20px;
    }

    .dialog-buttons {
    text-align: right;
    margin-top: 20px;
    }

    .componente {
    background-image: url("https://www.xtrafondos.com/descargar.php?id=5846&resolucion=3840x2160");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
    .difuminado {
    display: inline-block;
    background: rgba(58, 14, 255, 0.3);
    padding: 10px 10px;
    border-radius: 15px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(8px);
    margin: 20px;
    }
    .datatable-container {

    border-radius: 10px;
    overflow: hidden;
    }
</style>