import { FontAwesome } from "@expo/vector-icons";

export const routes: {title: string, name: keyof typeof FontAwesome.glyphMap, link: string }[] = [
    {
        title: 'Home',
        name: 'home',
        link: '',
    },
    {
        title: 'Popular',
        name: 'amazon',
        link: '#popular'
    },
    {
        title: 'Kabuku',
        name: 'book',
        link: '#kabuku'
    },
    {
        title: 'Kiroho',
        name: 'heart',
        link: '#kiroho'
    }, 
    {
        title: 'Latest',
        name: 'google',
        link: '#latest'
    }
] 