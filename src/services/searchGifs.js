export const searchGifs = (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=cN7jkZ9kUv81BFlyDF3sEvLQ0Q3wUfrb&q=${query}`
    return fetch(url).then(res => res.json())
                    .catch(err => console.error(err))
}