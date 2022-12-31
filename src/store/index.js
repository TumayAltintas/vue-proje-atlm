import createPersistedState from 'vuex-persistedstate'
import { createStore } from 'vuex'
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });
// Create a new index instance.
export default createStore({
	state () {
		return {
			user: null
		}
	},
	getters: {
		_isAuthenticated : state => state.user !== null,
		_getCurrentUser(state){
			const user = state.user;
			delete user?.password;
			return user;
		}

	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
		logoutUser(state) {
			state.user = null;
		},

	},
	plugins: [
		createPersistedState({
			storage : {
				getItem : key => ls.get(key),
				setItem : (key, value) => ls.set(key, value),
				removeItem : key => ls.remove(key)
			}
		})
	]
})

