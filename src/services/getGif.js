export const getGif = (id) => {
    const url = `https://api.giphy.com/v1/gifs/${id}?api_key=cN7jkZ9kUv81BFlyDF3sEvLQ0Q3wUfrb`
    return fetch(url).then(res => res.json())
                    .catch(err => console.error(err))
}