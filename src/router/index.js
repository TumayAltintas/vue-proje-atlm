import {createRouter, createWebHistory} from 'vue-router'

import store from "../store";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "LoginChoice",
			component: () => import("../views/LoginChoice.vue")},

		{
			path: "/Login",
			name: "Login",
			component: () => import("../views/Login.vue")},

		{
			path: "/LoginStudent",
			name: "LoginStudent",
			component: () => import("../views/LoginStudent.vue")},

		{
			path: "/Home",
			name: 'Home',
			component: () => import("../views/Home.vue")},

		{
			path: "/StudentHome",
			name: 'StudentHome',
			component: () => import("../views/StudentHomePage.vue")},

		{
			path: '/AdminAddStudent',
			name: 'AdminAddStudent',
			component: () => import("../views/AdminAddStudent.vue"),},

		{
			path: '/EditStudent/:id',
			name: 'AdminEditStudent',
			component: () => import("../views/AdminEditStudent.vue"),},

		{
			path: '/StudentInformation',
			name: 'StudentInformation',
			component: () => import("../views/StudentInformation.vue"),
		},

		{
			path: '/EditLesson',
			name: 'EditLesson',
			component: () => import("../views/AdminDersEklemeSilme.vue"),},

		{
			path: '/AdminMufredat',
			name: 'AdminMufredat',
			component: () => import("../views/AdminMufredat.vue"),},

		{
			path: '/StudentDers',
			name: 'StudentDers',
			component: () => import("../views/StudentDers.vue"),
		},
	]
});
router.beforeEach((to, _, next) => {
	const authRequiredRoutes = ["Home", "AdminAddStudent",
		"AdminEditStudent", "AdminMufredat", "EditLesson", "StudentInformation", "StudentHome", "StudentDers"];
	const authNotRequiredRoutes = [];
	const _isAuthenticated = store.getters._isAuthenticated;

	if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);

	if (authRequiredRoutes.indexOf(to.name) > -1) {
		if (_isAuthenticated) next();
		else next({path: "/"});
	} else {
		next();
	}
});
export default router;
