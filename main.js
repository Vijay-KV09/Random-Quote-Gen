const api_endpoint = "https://api.api-ninjas.com/v1/quotes?category=happiness";
import fetch from "node-fetch";

const getQuote = async  (api_endpoint) => {
    const response = await fetch(api_endpoint);
    var data = await response.json();
    console.log(data);
}