window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "http://cors-anywhere.herokuapp.com/";
            const api = `${[proxy]} https://api.darksky.net/forecast/73b9130497d0a1e00a25215f02323148/${lat},${long}`;
            
            fetch(api)
              .then(response => {
                return response.json();
              })
              .then(data => {
                console.log(data);
                const { temperature, summary } = data.currently;
                //Set DOM Elements from the API
                temperatureDegree.textContent = temperature; 
                temperatureDescription.textContent = summary;
            });
        });             
    }
});
