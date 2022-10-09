const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all');

request.send(null);

request.onload = () => {
  const response = JSON.parse(request.responseText);
  response.forEach(country => {
    const countryFlag = document.createElement('img');
    countryFlag.src = country.flags.png;
    countryFlag.title = country.name.common;
    countryFlag.alt = country.name.common;
    countryFlag.style.margin = '8px';
    document.body.append(countryFlag);
  });
};