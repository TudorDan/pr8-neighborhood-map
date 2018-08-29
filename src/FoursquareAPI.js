const
  PLACE = 'Bistrița',
  ENDPOINT = 'https://api.foursquare.com/v2/venues/explore?',
  ID = '5NB01HPQ1IKYMXI54ML15CTXA0DY0LKTYEM4X4XCRR1H2F4P',
  SECRET = 'HRLCVRFQNWF2GDWD53QGA0LXMWLESFYA2SFLESDADBBHXZOE',
  VERSION = '20180825'

/* get & simplifies Foursquare data */
export const getData = () => {
  return fetch(`${ENDPOINT}near=${PLACE}&client_id=${ID}&client_secret=${SECRET}&v=${VERSION}`)
    .then(res => res.json())
    .then(data => { return {
      center: data.response.geocode.center,
      venues: data.response.groups[0].items.map(item => { return {
        id: item.venue.id,
        name: item.venue.name,
        location: {lat: item.venue.location.lat, lng: item.venue.location.lng},
        type: item.venue.categories[0].name,
        icon: item.venue.categories[0].icon ? (item.venue.categories[0].icon.prefix + '32' + item.venue.categories[0].icon.suffix) : 'https://via.placeholder.com/32x32.png?text=X',
        adress: item.venue.location.formattedAddress[0] ? item.venue.location.formattedAddress[0] : 'Unspecified'
      }})
    }})
    .catch(error => console.error('FoursquareAPI error = ' + error))
}