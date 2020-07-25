
const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/admin/home/DataBarang.vue') },
      { path: 'inputdatabarang', component: () => import('pages/admin/home/InputDataBarang.vue') },
      { path: 'editdatabarang/:id', component: () => import('pages/admin/home/EditDataBarang.vue') },
      { path: 'datatransaksi', component: () => import('pages/admin/transaksi/DataTransaksi.vue') }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/pembeli/DataBarang.vue') },
      { path: 'transaksi', component: () => import('pages/pembeli/DataTransaksi.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/users/Login.vue') },
      { path: 'registrasi', component: () => import('pages/users/Registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
