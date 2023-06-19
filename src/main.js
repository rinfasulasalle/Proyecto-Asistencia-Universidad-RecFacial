import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';

// import
import PrimeVue from 'primevue/config';
//import "primevue/resources/themes/md-dark-indigo/theme.css"; 
//import "primevue/resources/themes/md-light-indigo/theme.css"; 
//import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/themes/viva-dark/theme.css";
//import "primevue/resources/themes/viva-light/theme.css";
//core
import "primevue/resources/primevue.min.css";
//icons
import 'primeicons/primeicons.css';

// cada componente se importa de forma separada +++++++++++++++++++++++++
//import Button from "primevue/button"
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Menubar from 'primevue/menubar';

const app = createApp(App);
app.use(PrimeVue);
// aqui agregamos el componente ******************************************
//app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Toolbar', Toolbar);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Dialog', Dialog);
app.component('Menubar', Menubar);


app.mount("#app")