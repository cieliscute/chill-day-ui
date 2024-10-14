import { LangChange } from '@/components/langChange'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeChange } from '@/components/themeChange'
import Home from './pages/home'

const setHTMLRem = () => {
//   if (!document.querySelector('.main')) return
//   const mainWidth = document.querySelector('.main')!.offsetWidth
  let htmlSize = 16 * (window.innerWidth / 375)
  htmlSize = htmlSize > 16 ? 16 : htmlSize
  document.documentElement.style.fontSize = htmlSize + 'px'
}

window.addEventListener('resize', setHTMLRem)

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <div className="bg-gray-200 text-primary">
        <div
          className="main max-w-[26.875rem] w-full mx-auto min-h-dvh overflow-hidden"
          style={{
            background:
              'linear-gradient(#2F78FB 0%, #3DA4FF 25%, #368EFD 50%, #C8DEFF 60%, #F4F6FF 75%, #9E93F2 90%, #6444E5 100%)',
          }}
        >
          {/* <LangChange />
            <ThemeChange /> */}
          <Home />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
