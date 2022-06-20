import colors from 'vuetify/es5/util/colors'

export default {
	theme: {
		light: true,
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				primary: colors.green.darken2,
				secondary: colors.teal.lighten3,
				accent: colors.green.darken2,
				//
				info: colors.indigo.lighten3,
				warning: colors.amber.base,
				error: colors.deepOrange.accent4,
				success: colors.green.accent3,
				//
				bg: colors.grey.lighten2,
				anchor: colors.green.darken2,
			},
		},
	},
}
