'use strict'
function getVideos(value = '') {
    if (!loadFromStorage(value) || !loadFromStorage(value).length) {
        console.log('from API');

        const prm = axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyASTnAMNooSJJ-NEW8yCpjnj7rv0VWKIX8&q=${value}`)
            .then(res => {
                saveToStorage(value, res.data.items);
                return res.data.items
            })
        return prm;
    }
    console.log('From Cache');
    const res = loadFromStorage(value);
    return Promise.resolve(res)

}


function getDetails(value = '') {
    return axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${value}&format=json`)
        .then(res => res.data)

}




