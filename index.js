const axios = require('axios');
const goodreadsapi = require('./config');
const goodreadsUri = 'https://www.goodreads.com';

module.exports = {
    getBooks(bookTitle) {
        return new Promise(function (resolve, reject) {
            return axios(goodreadsUri + '/search/index.xml?key=' + goodreadsapi.key + '&q=' + bookTitle, {
                method: 'GET',
            }).then(result => {
                return resolve(result.data);
            })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    },
    getBookDetails(ISBNId) {
        return new Promise(function (resolve, reject) {
            return axios(goodreadsUri + '/book/isbn/' + ISBNId + '?key=' + goodreadsapi.key, {
                method: 'GET',
            }).then(result => {
                return resolve(result.data);
            })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    },
    getBookAuthorDetails(Id) {
        return new Promise(function (resolve, reject) {
            return axios(goodreadsUri + '/author/show/' + Id + '?format=xml&&key=' + goodreadsapi.key, {
                method: 'GET',
            }).then(result => {
                return resolve(result.data);
            })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    }
};