<template>
<q-layout class="bg-blue-grey-1" view="hhh Lpr Lff">
 <q-page-container>
   <q-page class="row items-center justify-center">
       <div class="row full-width">
           <div class="col-md-8 offset-md-2 col-xs-12 q-pr-md q-pt-sm">
            <q-card class="bg-white text-black">
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <div class="row q-pt-md q-pb-md bg-white">
                          <div class="col-md-8 offset-2 col-xs-8">
                            <q-img spinner-color="white" placeholder-src="statics/logotas.png" src="statics/logotas.png"></q-img>
                          </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12 q-pt-md">
                      <div class="q-pa-md">
                        <div class="text-blue-grey-14 text-h4">Login</div>
                        <q-card-section class="text blue-gray-14"></q-card-section>

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
        type="Password"
        v-model="form.password"
        label="Password"
        hint="Password"
        lazy-rules
         :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
      />

      <div>
        <q-btn label="Login" type="submit" color="primary"/>
        <q-btn label="Registrasi" to="/registrasi" color="primary" flat class="q-ml-sm" />
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
  name: 'Login',
  data () {
    return {
      form: {
        username: null,
        password: null
      }
    }
  },

  methods: {
    onSubmit () {
      this.$axios.post('/user/login', {
        userName: this.form.username,
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
            if (res.data.data.role === 1) {
              this.$q.localStorage.set('datauser', res.data.data)
              this.$router.push('/admin')
            } else {
              this.$q.localStorage.set('datauser', res.data.data)
              this.$router.push('/pembeli')
            }
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
