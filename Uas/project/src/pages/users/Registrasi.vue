<template>
<q-layout class="bg-blue-grey-1" view="hhh Lpr Lff">
 <q-page-container>
   <q-page class="row items-center justify-center">
       <div class="row full-width">
           <div class="col-md-8 offset-md-2 col-xs-12 q-pr-md q-pt-sm">
            <q-card class="bg-white text-black">
                <div class="row">
                    <!-- <div class="col-md-6 col-xs-12">
                        <div class="row q-pt-md q-pb-md bg-teal-5">
                          <div class="col-md-8 offset-2 col-xs-8">
                            <q-img spinner-color="white" placeholder-src="statics/nyoba.png" src="statics/nyoba.png"></q-img>
                          </div>
                        </div>
                    </div> -->
                    <q-card-section class="section text-blue-grey-14">
                     <div class="text-h4">Registrasi</div>
                    </q-card-section>
                    <div class="col-md-12 col-xs-12 q-pt-md">
                      <div class="q-pa-md">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.username"
        label="Username"
        hint="Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
      />

      <q-input
        filled
        v-model="form.namaLengkap"
        label="Nama Lengkap"
        hint="Nama Lengkap"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
      />

      <q-input
        filled
        v-model="form.email"
        label="Email"
        hint="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
      />

      <q-input
        filled
        v-model="form.notelp"
        label="No Telepon"
        hint="No Telepon"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
      />

      <q-input
        filled
        type="Password"
        v-model="form.password"
        label="Password"
        hint="Password"
        lazy-rules
         :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
      />

       <div>
         <q-btn label="Registrasi" type="submit" color="primary"/>
         <q-btn label="Login" to="login" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

                      </div>
                    </div>
                </div>
            </q-card>
           </div>
       </div>
   </q-page>
</q-page-container>
</q-layout>
</template>

<script>
export default {
  name: 'Registrasi',
  data () {
    return {
      form: {
        username: null,
        namaLengkap: null,
        email: null,
        notelp: null,
        password: null
      },
      accept: false
    }
  },

  methods: {
    onSubmit () {
      this.$axios.post('/user/registrasi', {
        userName: this.form.username,
        namaLengkap: this.form.namaLengkap,
        email: this.form.email,
        noTelp: this.form.notelp,
        role: '2',
        password: this.form.password
      })
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'icon-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'icon-close'
            })
            this.$router.push('login')
          }
        })
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}

</script>

<style scoped>

</style>
