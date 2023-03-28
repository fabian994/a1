import { createApp } from 'vue'
import { createVuetify, ThemeDefinition } from 'vuetify'

const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        primary: '#384FFE',
        secondary: '#787C9D',
    }
}

export default createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme,
        }
    }
})
