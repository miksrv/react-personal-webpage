import { TIconNames } from '../../layouts/svgIcon'

export type TContacts = {
    link: string
    label: string
    icon: TIconNames
}

export const Data: TContacts[] = [
    {
        link: 'https://t.me/miksoft',
        label: 'Telegram',
        icon: 'telegram'
    },
    {
        link: 'https://vk.com/miksoft',
        label: 'VKontakte',
        icon: 'vkontakte'
    },
    {
        link: 'https://pikabu.ru/@miksoft',
        label: 'Pikabu',
        icon: 'pikabu'
    },
    {
        link: 'https://github.com/miksrv',
        label: 'GitHub',
        icon: 'github'
    }
]