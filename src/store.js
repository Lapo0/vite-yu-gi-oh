import { reactive } from 'vue'

const store = reactive({
	cards: [],
	inputSearch: '',
	selectedNumCard: '20',
})

export default store