<template>
<div>
	<button 
		class="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
		@click.prevent="toggle()"
	>
		<img
			class="h-full w-full object-cover"
			src="@/assets/images/user.png"
			alt="Your avatar"
		/>
	</button>

	<div 
		class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200  rounded-md shadow-lg outline-none"
			v-show="isOpen"
	>
		<div class="px-4 py-3">
			<p class="text-sm leading-5">{{ me.nome }}</p>
			<p class="text-sm font-medium leading-5 text-gray-900 truncate">
				{{ me.email }}
			</p>
		</div>

		<slot/>

	</div>
</div>
</template>
<script>
export default {
	name: 'Dropdown',

	//dependence injection
	provide(){
		return {
			dropdown: this,
		}
	},


	data(){
		return {
			isOpen: false,
		}
	},

	computed: {
		me() {
			return this.$store.state.auth.me;
		}
	},

	mounted() {
        document.addEventListener('click', this.clickOutListener);
	},
	
	beforeDestroy() {
		document.addEventListener('click', this.clickOutListener);
	},
	
	methods: {
		toggle(){
			this.isOpen = !this.isOpen;
		},

		close() {
			this.isOpen = false
		},

		clickOutListener(){
			if(!this.$el.contains(event.target)){
				this.close();
			}
			// console.log('EventListner aqui!')
		}
	}
	
}
</script>
