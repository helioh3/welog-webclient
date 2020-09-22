import Portugues from 'vue-tailwind/dist/l10n/pt'

const settings = {

    TButton: {
        // classes: '...',
        // ...
        // Originally it defaults to `undefined` that means is considered a submit
        // button if the button is inside a form.
        type: 'button',
    },

    TDatepicker: {
        // classes: '...',
        // ...
        // Originally a locale object with English values
        locale: Portugues,
    },

    TAlert: {
        // classes: '...',
        // ...
        // Originally `true`
        dismissible: false,
    },

    TModal: {
        // classes: '...',
        // ...
        // Originally `true`
    escToClose: false,
	},
	
	container: {
		classes: 'mx-auto px-6 py-8',
		Originally: 'true'
	}
}

export default settings
