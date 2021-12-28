# company-finder
API to search infos on a given company

available endpoints:

GET /search/french-phone-number
queryParams: name, address, zipcode, city, country

(these params are all used the same way for now, just use at least one)

ex: /search/french-phone-number?name=Petit%20Cube
should return "+33 641978899"