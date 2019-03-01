import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/Home/AppHome'
import AppLogin from '@/components/Login/AppLogin'
import AppSignup from '@/components/Signup/AppSignup'
import AppCatalog from '@/components/Catalog/AppCatalog'
import CatalogCAT from '@/components/Catalog/CatalogCAT-SD'
import CatalogInquiry from '@/components/Catalog/CatalogInquiry'
import CatalogOrderBy from '@/components/Catalog/CatalogOrderBy'
import CatalogSortBy from '@/components/Catalog/CatalogSortBy'
import CatalogSRF from '@/components/Catalog/CatalogSRF'
import CatalogAgg from '@/components/Catalog/CatalogAdditiveAggregation'
import FAQ from '@/components/FAQ/FAQ'
import workspace from '@/components/Workspace/workspace'
import MyProjects from '@/components/MyProjects/MyProjects'
import MyProjects2 from '@/components/MyProjects/MyProjects2'
import PublicProjects from '@/components/PublicProjects/PublicProjects'
import PublicProjects2 from '@/components/PublicProjects/PublicProjects2'
import Settings from '@/components/Settings/Settings'
import Settings2 from '@/components/Settings/Settings2'
import Admin from '@/components/Admin/Admin'
import Anonymous from '@/components/Workspace/Anonymous'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome,
    },
    {
      path: '/method-catalog',
      name: 'AppCatalog',
      component: AppCatalog
    },
    {
      path: '/method-catalog/CAT-SD',
      name: 'CatalogCAT',
      component: CatalogCAT
    },
    {
      path: '/method-catalog/Inquiry',
      name: 'CatalogInquiry',
      component: CatalogInquiry
    },
    {
      path: '/method-catalog/OrderBy',
      name: 'CatalogOrderBy',
      component: CatalogOrderBy
    },
    {
      path: '/method-catalog/SortBy',
      name: 'CatalogSortBy',
      component: CatalogSortBy
    },
    {
      path: '/method-catalog/SRF',
      name: 'CatalogSRF',
      component: CatalogSRF
    },
    {
      path: '/method-catalog/AdditiveAggregation',
      name: 'CatalogAgg',
      component: CatalogAgg
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/workspace',
      name: 'workspace',
      component: workspace
    },
    {
      path: '/workspaceAnonymous',
      name: 'workspaceAnonymous',
      component: Anonymous
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/myprojects',
      name: 'Myprojects',
      component: MyProjects
    },
    {
      path: '/myprojects2',
      name: 'Myprojects2',
      component: MyProjects2
    },
    {
      path: '/publicprojects',
      name: 'PublicProjects',
      component: PublicProjects
    },
    {
      path: '/publicprojects2',
      name: 'PublicProjects2',
      component: PublicProjects2
    },
    {
      path: '/settings2',
      name: 'Settings2',
      component: Settings2
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/signup',
      name: 'AppSignup',
      component: AppSignup
    }
  ]
})
