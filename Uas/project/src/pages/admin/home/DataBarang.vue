<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="teal" :disable="loading" label="Tambah Data Tas" to="/admin/inputdatabarang"/>
          <!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kodeBarang" :props="props">
              {{ props.row.kodeBarang }}
            </q-td>
            <q-td key="jenisBarang" :props="props">{{ props.row.jenisBarang }}</q-td>
            <q-td key="namaBarang" :props="props">{{ props.row.namaBarang}}</q-td>
            <q-td key="stockBarang" :props="props">{{ props.row.hargaBarang }}</q-td>
            <q-td key="hargaBarang" :props="props">{{ props.row.hargaBarang }}</q-td>
            <q-td key="gambar" :props="props">
              <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn color="teal"
                       dense size="sm"
                       class="q-px-xs"
                       icon="edit"
                       @click="edit(props.row.kodeBarang)"
                       label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusDataBarang(props.row._id)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      urlGambar: null,
      baseUrl: 'http://localhost:5050/gambar/',
      columns: [
        {
          name: 'kodeBarang',
          required: true,
          label: 'Kode Barang',
          align: 'left',
          field: row => row.kodeBarang,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'jenisBarang', align: 'center', label: 'Jenis Barang', field: 'jenisBarang', sortable: true },
        { name: 'namaBarang', align: 'center', label: 'Nama Barang', field: 'namaBarang', sortable: true },
        { name: 'stockBarang', label: 'Ketersedian Barang', align: 'center', field: 'pengarang' },
        { name: 'hargaBarang', label: 'Harga Barang', align: 'center', field: 'hargaBarang' },
        { name: 'gambar', label: 'Gambar', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },
  methods: {
    getDataBarang () {
      this.$axios.get('/barang/databarang')
        .then((res) => {
          this.data = res.data.data
        })
    },
    hapusDataBarang (_id) {
      this.$axios.delete('/barang/hapus/' + _id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'Berhail Menghapus Data'
          })
          this.getDataBarang()
        })
    },
    edit (kodeBarang) {
      this.$router.push('/admin/editdatabarang/' + kodeBarang)
    }
  },
  mounted () {
    this.getDataBarang()
  }
}
</script>
