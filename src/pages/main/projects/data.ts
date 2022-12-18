import imageMeteo from './project-meteostation.jpg'
import imageAstro from './project-observatory.jpg'
import imageOrion from './project-orion.jpg'
import imageGreen from './project-greenexp.jpg'

export type TProjects = {
    link: string
    label: string
    image: string
}

export const Data: TProjects[] = [
    {
        link: 'https://meteo.miksoft.pro/',
        label: 'Amateur weather station',
        image: imageMeteo
    },
    {
        link: 'https://observatory.miksoft.pro/',
        label: 'Homemade observatory ',
        image: imageAstro
    },
    {
        link: 'https://vk.com/astrorion',
        label: 'Science projects',
        image: imageOrion
    },
    {
        link: 'https://greenexp.ru',
        label: 'Greenexp travel project',
        image: imageGreen
    }
]