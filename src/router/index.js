import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/demand',
                    component: resolve => require(['../components/demandManage/demandManage.vue'], resolve),
                    meta: { title: '需求管理' }
                },
                {
                    path: '/approval',
                    component: resolve => require(['../components/approvalManage/approvalManage.vue'], resolve),
                    meta: { title: '审批管理' }
                },
                {
                    path: '/defect',
                    component: resolve => require(['../components/defectManage/defectManage.vue'], resolve),
                    meta: { title: '缺陷管理' }
                },
                {
                    path: '/development',
                    component: resolve => require(['../components/developManage/developManage.vue'], resolve),
                    meta: { title: '开发管理' }
                },
                {
                    // 拖拽列表组件
                    path: '/case',
                    component: resolve => require(['../components/caseManage/caseManage.vue'], resolve),
                    meta: { title: '案列管理' }
                },
                {
                    // 图片上传组件
                    path: '/testcase',
                    component: resolve => require(['../components/testCastManage/testCastManage.vue'], resolve),
                    meta: { title: '测试案列' }
                },
                {
                    // markdown组件
                    path: '/test',
                    component: resolve => require(['../components/publicManage/publicManage.vue'], resolve),
                    meta: { title: '测试管理' }
                },
                {
                    // vue-schart组件
                    path: '/report',
                    component: resolve => require(['../components/reportManage/reportManage.vue'], resolve),
                    meta: { title: '报表管理' }
                },
                {
                    // 富文本编辑器组件
                    path: '/public',
                    component: resolve => require(['../components/caseManage/caseManage.vue'], resolve),
                    meta: { title: '公共管理' }
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
