import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ServerAPI {

  oauthAPI = '/markit/api/oauth';
  currencyAPI = '/markit/api/market/data/current';
  historicDataAPI = '/markit/api/market/data/historic/';
  marketAPI = '/markit/api/market/currencies';
  userAPI = '/markit/api/user';
  userFavouriteListAPI = '/markit/api/user/favourites';
  userFavouriteAPI = '/markit/api/favourite';
  userLoginAPI = '/markit/api/user/login';
  rssAPI = '/markit/api/rss';

  /**
   * Constructor
   */
  constructor() {
  }

  /**
   * Check if the user is authenticated
   * @param  {string} token  - jwt token
   * @return {Promise<any>}  - a server response
   */
  validateJWT(token) {
    return fetch(this.oauthAPI, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }

  /**
   * Fetch the historic market data from the server
   * @return {Promise<any>}    -historic market data
   */
  fetchHistoricData(intrinioId) {
    return fetch(this.historicDataAPI + intrinioId, {
      method: 'GET',
    })
    .then((response) => {
      return response.json();
    });
  }

  /**
   * Fetch the current market data from the server
   * @return {Promise<any>}    -current market data
   */
  fetchCurrentData() {
    return new Promise<any>((resolve) => {
      fetch(this.currencyAPI, {
        method: 'GET',
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch(() => {resolve([]); });
    });
  }

  /**
   * Fetch all currency market's information from the server
   * @return {Promise<any[]>}     - a list of currency market's information
   */
  fetchMarketsData() {
    return new Promise<any[]>((resolve) => {
      fetch(this.marketAPI, {
        method: 'GET',
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch(() => {resolve([]); });
    });
  }

  /**
   * Update the user detail of a logged-in user
   * @return {Promise<any>}     - a 202 status response if update is
   *                            - successful, an error message otherwise
   */
  updateUser(jsonPayload) {
    return fetch(this.userAPI, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt'),
      },
      body: JSON.stringify(jsonPayload),
    });
  }

  /**
   * Get the user detail of a logged-in user
   * @return {Promise<any>}     - user information, or 401 status reponse if jwt token is invalid
   */
  getUser() {
    return fetch(this.userAPI, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt'),
      },
    });
  }

  /**
   * Get a list of user favourites (currency markets) of a logged-in user
   * @return {Promise<any>}    - a list of user favourites, or 401
   *                           -  status reponse if jwt token is invalid
   */
  getUserFavourites() {
    return new Promise<any>((resolve) => {
      fetch(this.userFavouriteListAPI, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('jwt'),
        },
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch(() => {resolve([]); });
    });
  }

  /**
   * Remove a user favourite (currency markets) from a logged-in user
   * @param  {number} id       - favourite id
   * @return {Promise<any>}    - a 202 status response if delete is successfully,
   *                           -  a 401 status reponse otherwise
   */
  deleteUserFavourite(id) {
    return fetch(this.userFavouriteAPI + '/' + id, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt'),
      },
    });
  }

  /**
   * Favourite a currency market
   * @param  {number} id       - market id
   * @return {Promise<any>}    - a 202 status response if delete is successfully,
   *                           -  a 401 status reponse otherwise
   */
  newUserFavourite(id) {
    return fetch(this.userFavouriteAPI + '/' + id, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt'),
      },
    });
  }
  /**
   * Attempt to login a user
   * @param  {any} jsonPayload - login credentials
   * @return {Promise<any}     - a jwt token if user is successfully logged in, or an error message
   */
  login(jsonPayload) {
    return fetch(this.userLoginAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonPayload),
    });
  }

  /**
   * Attempt to register a user
   * @param  {any} jsonPayload - register detail
   * @return {Promise<any}     - a 202 response if a user has
   *                           - successfully registered, or an error message otherwise
   */
  register(jsonPayload) {
    return fetch(this.userAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonPayload),
    });
  }

  /**
   * Obtain a list of rss feeds
   * @return {Promise<any}     - a list of rss feed
   */
  getRSSFeed() {
    return fetch(this.rssAPI, {
      method: 'GET',
    });
  }
}
