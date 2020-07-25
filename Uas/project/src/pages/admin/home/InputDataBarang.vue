<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Tas</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

          <q-input
            label="Kode Barang"
            lazy-rules
            color="teal"
            v-model="form.kodeBarang"
            :rules="[
           val => val !== null && val !== '' || 'Kode Buku Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>
          <q-input
            label="Jenis Barang"
            lazy-rules
            color="teal"
            v-model="form.jenisBarang"
            :rules="[
           val => val !== null && val !== '' || 'Jenis Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>
          <q-input
            label="Nama Barang"
            lazy-rules
            color="teal"
            v-model="form.namaBarang"
            :rules="[
           val => val !== null && val !== '' || 'Nama Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>
          <q-input
            label="Ketersediaan Barang"
            lazy-rules
            color="teal"
            v-model="form.stockBarang"
            :rules="[
           val => val !== null && val !== '' || 'Ketersediaan Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Harga Barang"
            lazy-rules
            color="teal"
            v-model="form.hargaBarang"
            :rules="[
           val => val !== null && val !== '' || 'Harga Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="calendar_today"/>
            </template>
          </q-input>

          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="Tambah Data Buku"
              style="height: 50px"
              type="submit"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        kodeBarang: null,
        jenisBarang: null,
        namaBarang: null,
        stockBarang: null,
        hargaBarang: null
      },
      gambar: null
    }
  },
  methods: {
    selectFile () {
      this.gambar = this.$refs.file.$refs.input.files[0]
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('kodeBarang', this.form.kodeBarang)
      formData.append('jenisBarang', this.form.jenisBarang)
      formData.append('namaBarang', this.form.namaBarang)
      formData.append('stockBarang', this.form.stockBarang)
      formData.append('hargaBarang', this.form.hargaBarang)
      formData.append('gambar', this.gambar)
      this.$axios.post('/barang/input', formData)
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('/admin')
          }
        })
    }
  }
}
</script>

<style scoped>
</style>
<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Barang</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

          <q-input
            label="Kode Barang"
            lazy-rules
            color="teal"
            v-model="form.kodeBarang"
            :rules="[
           val => val !== null && val !== '' || 'Kode Buku Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>
          <q-input
            label="Jenis Barang"
            lazy-rules
            color="teal"
            v-model="form.jenisBarang"
            :rules="[
           val => val !== null && val !== '' || 'Jenis Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>
          <q-input
            label="Nama Barang"
            lazy-rules
            color="teal"
            v-model="form.namaBarang"
            :rules="[
           val => val !== null && val !== '' || 'Nama Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>
          <q-input
            label="Ketersediaan Barang"
            lazy-rules
            color="teal"
            v-model="form.stockBarang"
            :rules="[
           val => val !== null && val !== '' || 'Ketersediaan Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Harga Barang"
            lazy-rules
            color="teal"
            v-model="form.hargaBarang"
            :rules="[
           val => val !== null && val !== '' || 'Harga Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="calendar_today"/>
            </template>
          </q-input>

          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="Tambah Data Buku"
              style="height: 50px"
              type="submit"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          kodeBarang: null,
          jenisBarang: null,
          namaBarang: null,
          stockBarang: null,
          hargaBarang: null
        },
        gambar: null
      }
    },
    methods: {
      selectFile () {
        this.gambar = this.$refs.file.$refs.input.files[0]
      },
      onSubmit () {
        const formData = new FormData()
        formData.append('kodeBarang', this.form.kodeBarang)
        formData.append('jenisBarang', this.form.jenisBarang)
        formData.append('namaBarang', this.form.namaBarang)
        formData.append('stockBarang', this.form.stockBarang)
        formData.append('hargaBarang', this.form.hargaBarang)
        formData.append('gambar', this.gambar)
        this.$axios.post('/barang/input', formData)
          .then((res) => {
            if (res.data.error) {
              this.$q.notify({
                color: 'negative',
                message: res.data.msg,
                icon: 'ion-close'
              })
            } else {
              this.$q.notify({
                color: 'positive',
                message: res.data.msg,
                icon: 'ion-close'
              })
              this.$router.push('/admin')
            }
          })
      }
    }
  }
</script>

<style scoped>
</style>
