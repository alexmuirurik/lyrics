import ytdl from 'react-native-ytdl'

export const getVideoFromYouTube = (url: string) => {
    try {
        const video = ytdl('https://www.youtube.com/watch?v=rpyvSIsYTJE')
        return video
    } catch (error) {
        console.log('Error Getting YouTube Video ' + error)
    }
}