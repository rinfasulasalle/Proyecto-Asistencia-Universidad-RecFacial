    <template>
        <div>
        <h1>Componente Cámara</h1>
        <div>
            <video ref="video" width="640" height="480"></video>
            <button @click="takePhoto" :disabled="!isCameraReady">Tomar foto</button>
        </div>
        <div>
            <canvas ref="canvas" width="640" height="480"></canvas>
            <img v-if="capturedPhoto" :src="capturedPhoto" alt="Captured Photo" />
        </div>
        </div>
    </template>
    
    <script>
    export default {
        data() {
        return {
            videoStream: null,
            isCameraReady: false,
            capturedPhoto: null
        };
        },
        mounted() {
        this.accessCamera();
        },
        methods: {
        accessCamera() {
            navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                this.videoStream = stream;
                this.$refs.video.srcObject = stream;
                this.$refs.video.play();
                this.isCameraReady = true;
            })
            .catch((error) => {
                console.log('Error accessing camera:', error);
            });
        },
        takePhoto() {
            const video = this.$refs.video;
            const canvas = this.$refs.canvas;
            const context = canvas.getContext('2d');
    
            // Dibujar el video en el canvas
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
            // Obtener la imagen en formato base64
            this.capturedPhoto = canvas.toDataURL('image/png');
    
            // Detener el stream de la cámara
            const tracks = this.videoStream.getTracks();
            tracks.forEach((track) => track.stop());
    
            // Reiniciar la variable del stream y desactivar la cámara
            this.videoStream = null;
            this.isCameraReady = false;
        }
        }
    };
    </script>
    