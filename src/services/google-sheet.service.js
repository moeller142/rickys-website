

var CLIENT_ID = '<YOUR_CLIENT_ID>';
var API_KEY = 'AIzaSyAfHRUYtmXnk-Czu1tQhL8oenT7RjZBr20';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');
var spreadSheetId = '1NzkJHy0XFj_i3-NZR8yN6j1kShYJREU3xG5mVuOfGuA';
/**
 * Load the cars from the spreadsheet
 * Get the right values from it and assign.
 */
function load(callback) {
    window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: spreadSheetId, 
                range: 'Sheet1!A1:F3'
            })
            .then(
                response => {
                    const data = response.result.values;
                    console.log('data', data);
                    callback(buildObjectFromResponseData(data));
                },
                response => {
                    const error = response.result.error;
                    console.log('error', error);
                    callback(error);
                }
            );
    });
}

const buildObjectFromResponseData = (data) => {
    const labels = data.splice(0, 1)[0];
    return data.map(row => {
        const obj = {};
        labels.forEach((label, index) => {
            obj[label] = row[index];
        });
        return obj;
    });
}

export function initEventsSheet(callback) {
    const initClient = () => {
        // 2. Initialize the JavaScript client library.
        window.gapi.client
            .init({
                apiKey: API_KEY,
                // Your API key will be automatically added to the Discovery Document URLs.
                discoveryDocs: DISCOVERY_DOCS
            })
            .then(() => {
                // 3. Initialize and make the API request.
                load(callback);
            });
    };

    window.gapi.load("client", initClient);
}