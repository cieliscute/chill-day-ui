import { useTranslation as UseTranslation } from 'react-i18next'
import { Button } from './ui/button'

const LangChange = () => {
    const { i18n, t } = UseTranslation()

    const changeLanguage = (lng: string): void => {
        i18n.changeLanguage(lng)
    }

    const lang = [
        { label: '中', value: 'zh_tw' },
        { label: '英', value: 'en' },
    ]

    return (
        <>
            {lang.map(item => (
                <Button
                    key={item.value}
                    variant={i18n.language === item.value ? 'default' : 'outline'}
                    onClick={() => changeLanguage(item.value)}
                >
                    {item.label}
                </Button>
            ))}
            文字： {t('test1')} | 當前語系: {i18n.language}
        </>
    )
}

export { LangChange }
