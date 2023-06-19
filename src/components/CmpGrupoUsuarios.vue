<template>
<div class="componente">
  <div class="difuminado">
    <h1>TABLA GRUPO USUARIOS</h1>
  </div>
  <div class="card">
    <div class="datatable-container">
    <DataTable
      v-model:editingRows="editingRows"
      :value="grupUsers"
      editMode="row"
      dataKey="id_grupo"
      tableClass="editable-cells-table"
      tableStyle="min-width: 50rem"
      @row-edit-save="onRowEditSave"
      :paginator="true"
      :rows="10"
      :paginatorTemplate="paginatorTemplate"
      :rowsPerPageOptions="[5,10,25]"
    >
      <Column field="id_grupo" header="id_grupo" style="width: 20%"></Column>
      <Column field="nombre_grupo" header="nombre_grupo" style="width: 20%">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
      <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
    </DataTable>
  </div>
  </div>
  <div class="botones">
    <Button label="Agregar" severity="secondary" icon="pi pi-user-plus" @click="showAddDialog = true" />
    <Button label="Eliminar" severity="danger" icon="pi pi-delete-left" @click="showDeleteDialog = true" />
  </div>

  <!-- Diálogo para agregar usuarios -->
  <Dialog v-model="showAddDialog" header="Agregar Usuario" :visible="showAddDialog" modal>
    <form @submit="submitForm" @reset="cancelForm">
      <div class="p-fluid">
        <div class="p-field">
          <label for="nombre_grupo">Nombre Grupo</label>
          <InputText id="nombre_grupo" v-model="newUser.nombre_grupo" />
        </div>
      </div>
      <div class="dialog-buttons">
        <Button type="submit" label="Submit" icon="pi pi-check" severity="success" />
        <Button type="reset" label="Cancelar" icon="pi pi-times" severity="danger"/>
      </div>
    </form>
  </Dialog>

  <!-- Diálogo para eliminar usuarios -->
  <Dialog v-model="showDeleteDialog" header="Eliminar Usuario" :visible="showDeleteDialog" modal>
    <form @submit="deleteUser" @reset="cancelDelete">
      <div class="p-fluid">
        <div class="p-field">
          <label for="id_grupo_usuario">ID Grupo</label>
          <InputText id="id_grupo_usuario" v-model.number="deleteIdGrupo" />
        </div>
      </div>
      <div class="dialog-buttons">
        <Button type="submit" label="Eliminar" icon="pi pi-trash" severity="danger"/>
        <Button type="reset" label="Cancelar" icon="pi pi-times" severity="secondary" />
      </div>
    </form>
  </Dialog>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      grupUsers: [],
      showAddDialog: false,
      showDeleteDialog: false,
      newUser: {
        id_grupo_usuario: '',
        nombre_grupo: ''
      },
      deleteIdGrupo: '',
      editingRows: [],
      paginatorTemplate:
        'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown'
    };
  },
  methods: {
    // Método para obtener los datos de la tabla
    refrescarTabla() {
      axios.post('http://127.0.0.1:5000/grupoUsuarios')
        .then((res) => { 
          this.grupUsers = res.data; 
          console.log("Datos cargados:", res.data);
        })
        .catch((error) => { 
          console.log(error);
        });
    },
    // Método para enviar el formulario de agregar usuario
    submitForm() {
      axios.put('http://127.0.0.1:5000/grupoUsuario', { nombre_grupo: this.newUser.nombre_grupo })
        .then((res) => {
          this.refrescarTabla();
          console.log("Datos enviados al servidor:", res.data);
          this.cancelForm();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // Método para cancelar el formulario de agregar usuario
    cancelForm() {
      this.showAddDialog = false;
      this.newUser.id_grupo_usuario = '';
      this.newUser.nombre_grupo = '';
    },
    // Método para eliminar un usuario
    deleteUser() {
      axios.delete('http://127.0.0.1:5000/grupoUsuario', { data: { id_grupo_usuario: this.deleteIdGrupo } })
        .then((res) => {
          this.refrescarTabla();
          this.cancelDelete();
          console.log("Usuario eliminado:", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // Método para cancelar la eliminación de un usuarios
    cancelDelete() {
      this.showDeleteDialog = false;
      this.deleteIdGrupo = '';
    },
    // Método para guardar los cambios al editar una fila
    onRowEditSave(event) { // FALTA
      const rowData = event.data;
      console.log("aaaaaa",event.data);
      axios.patch('http://127.0.0.1:5000/grupoUsuario', { id_grupo_usuario: rowData.id_grupo, nombre_grupo: rowData.nombre_grupo })
        .then((res) => {
          console.log("Datos actualizados en el servidor:", res.data);
          console.log("xd:", rowData.nombre_grupo);
          this.refrescarTabla();
        })
        .catch((error) => {
          console.log("Errorr:",error);
        });
    }
  },
  created() {
    this.refrescarTabla();
  }
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
