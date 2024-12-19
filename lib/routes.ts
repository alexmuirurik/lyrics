import { FontAwesome } from "@expo/vector-icons";
import { Href } from "expo-router";

export const ToTitleCase = (val: string) =>  {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export const routes: {title: string, name: keyof typeof FontAwesome.glyphMap, link: Href }[] = [
    {
        title: 'Home',
        name: 'home',
        link: '/',
    },
    {
        title: 'Popular',
        name: 'amazon',
        link: { 
            pathname: '/categories/[category]', 
            params: { category: 'popular' }
        }
    },
    {
        title: 'Kabuku',
        name: 'book',
        link: { 
            pathname: '/categories/[category]', 
            params: { category: 'kabuku' }
        }
    },
    {
        title: 'Kiroho',
        name: 'heart',
        link: { 
            pathname: '/categories/[category]', 
            params: { category: 'kiroho' }
        }
    }, 
    {
        title: 'Latest',
        name: 'google',
        link: { 
            pathname: '/categories/[category]', 
            params: { category: 'latest' }
        }
    }
] 