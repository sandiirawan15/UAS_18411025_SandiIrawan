<template>
<q-page>
 <div class="q-pa-md">
    <q-table
      title="`Treats"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >

      <template v-slot:top>
        <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Data Transaksi</span>
        </span>
        <!-- <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
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
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodeTransaksi,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'desc',
          required: true,
          label: 'Kode Barang',
          align: 'left',
          field: row => row.kodeBarang,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaPembeli', align: 'center', label: 'Nama Pembeli', field: 'namaPembeli', sortable: true },
        { name: 'jenisBarang', align: 'center', label: 'Jenis Barang', field: 'jenisBarang', sortable: true },
        { name: 'namaBarang', align: 'center', label: 'Nama Barang', field: 'namaBarang', sortable: true },
        { name: 'jumlahPembelian', align: 'center', label: 'Total Pembelian', field: 'jumlahPembelian' },
        { name: 'biayaOngkir', align: 'center', label: 'Biaya Ongkir', field: 'biayaOngkir' },
        { name: 'totalPembayaran', align: 'center', label: 'Total Pembayaran', field: 'totalPembayaran' }
      ],
      data: [
        {
          kodeTransaksi: 'C001',
          kodeBarang: 'B002',
          namaPembeli: 'user',
          jenisBarang: 'Tas Wanita',
          namaBarang: 'Tas Casual',
          jumlahPembelian: '1',
          biayaOngkir: 'Rp. 5000',
          totalPembayaran: 'Rp.155.000'
        },
        {
          kodeTransaksi: 'C002',
          kodeBarang: 'K003',
          namaPembeli: 'user',
          jenisBarang: 'Tempered-Glass',
          namaBarang: 'Tempered-Glass Hp Xiaomy',
          jumlahPembelian: '1',
          biayaOngkir: 'Rp. 5000',
          totalPembayaran: 'Rp. 55.000'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
