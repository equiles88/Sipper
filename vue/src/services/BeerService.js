import axios from 'axios';

export default {
    
    getBeers() {
        return axios.get('/allBeers');
    },
    getBeerByID(id) {
        return axios.get(`/beer/${id}`)
    },
    getBeersByBreweryId(breweryId) {
        breweryId = parseInt(breweryId);
        return axios.get(`/beers/${breweryId}`);
    },
    addBeer(beer) {
        return axios.post('addBeer', beer)
    },
    updateBeer(beer){
        return axios.put(`/updateBeer/${beer.beer_id}`, beer)
    },
    deleteBeer(id){
        return axios.delete(`/deleteBeer/${id}`)
    },
}