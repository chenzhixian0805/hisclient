// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import('@/views/Index.vue'),
    children:[
      {
        path:'onsiteRegistration',
        component:()=>import('@/views/OnsiteRegistration.vue')
      },
      {
        path:'registrationRecord',
        component:()=>import('@/views/RegistrationRecord.vue')
      },
      {
        path:'patientview',
        component:()=>import('@/views/PatientView.vue')
      },
      {
        path:'medicalrecord',
        component:()=>import('@/views/MedicalRecord.vue'),
        children: [
          {
            path: 'addDisease',
            name: 'AddDisease',
            component:()=>import('@/views/AddDisease.vue')
          }
        ]
      },
      {
        path:'prescribemedicine',
        component:()=>import('@/views/PrescribeMedicine.vue'),
        children: [
          {
            path: 'addmedicine', // 新增药品页面路径
            name: 'AddMedicine',
            component:()=>import('@/views/AddMedicine.vue')
          }
        ]
      },
      {
        path:'pharmacydispensing',
        component:()=>import('@/views/PharmacyDispensing.vue')
      },
      {
        path:'pharmacyinventory',
        component:()=>import('@/views/PharmacyInventory.vue')
      },
      {
        path:'internalmedicine',
        component:()=>import('@/views/InternalMedicine.vue')
      },
      {
        path:'surgery',
        component:()=>import('@/views/Surgery.vue')
      },
      {
        path:'person',
        component:()=>import('@/views/Person.vue')
      },
    ]
  }  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
