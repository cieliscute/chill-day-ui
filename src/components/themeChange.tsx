import { UseTheme } from '@/components/theme-provider'
import { Button } from './ui/button'

const ThemeChange = () => {
    const { setTheme, theme } = UseTheme()

    return (
        <div>
            切換主題:
            <Button onClick={() => setTheme('light')}>Light</Button>
            <Button onClick={() => setTheme('dark')}>Dark</Button>
            當前主題: {theme}
        </div>
    )
}

export { ThemeChange }
