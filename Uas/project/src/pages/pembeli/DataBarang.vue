<template>
<q-page>
    <div class="q-pa-md">
        <div class="row">

             <div class="col-md-4 col-xs-12 q-pa-md"  v-for="(barang, i) in data" :key="i">
                <q-card flat class="bg-white text-blue-grey-14">
                     <q-card-section>
                        <div class="text-h6 text-center">
                          {{ barang.namaBarang  }}
                        </div>
                    </q-card-section>
                  <div >
                    <q-card-section class="row items-center justify-center">
                      <q-img spinner-color="white" style="height: 250px; max-width: 50%" :src="baseUrl + barang.gambar"/>
                    </q-card-section>
                  </div>
                    <q-card-section>
                        <div class="text-center text-bold">
                            Harga : Rp. {{barang.hargaBarang}}
                        </div>
                    </q-card-section>
                    <q-card-section>

                        <q-btn unelevated color="teal" icon="add_shopping_cart" no-caps label="Tambah Keranjang"></q-btn>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</q-page>
</template>

<script>
export default {
  name: 'DataBarang',
  data () {
    return {
      data: [],
      baseUrl: 'http://localhost:5050/gambar/'
    }
  },
  methods: {
    getDataBarang () {
      this.$axios.get('/barang/databarang')
        .then((res) => {
          this.data = res.data.data
          console.log(res
          )
        })
    }
  },
  mounted () {
    this.getDataBarang()
  }
}
</script>

<style scoped>
</style>
