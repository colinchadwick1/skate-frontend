function getSpots() { return  [{
  spotId : 100,
  locationName : 'MACBA',
  description: "Very nice spot",
  rating: 4.5,
  coords: {
    lat: 34.65,
    lng:-34.56
  },
  address: "35 MACBA Street",
  filterTags: ['skate', 'street', 'free'],
  imageUrl: "https://img.macba.cat/public/styles/16x9_large/public/imagen/2021-02/macba-201107-203.jpg?h=6f8e2d4a&itok=N1vToFQ9"
},
{
  spotId: 102,
  locationName : 'Paralell',
  description: "Very yellow spot",
  rating: 4.6,
  coords: {
    lat: 35.65,
    lng:-37.56
  },
  address: "35 Plel Street",
  filterTags: ['skate', 'skatepark', 'free'],
  imageUrl: "http://galaxypro.s3.amazonaws.com/spot-media/329/329-parallel-skateboarding-spain.jpg"
},
{
  spotId: 103,
  locationName : 'Born Plaza',
  description: "Very smooth spot",
  rating: 4.8,
  coords: {
    lat: 36.65,
    lng:-36.56
  },
  address: "35 Born Street",
  filterTags: ['skate', 'skatepark', 'plaza', 'free'],
  imageUrl: "https://landezine-award.com/wp-content/uploads/2020/05/PMAM-SKATE-ARCHITECTS-BORN-PLAZA-SKATEPLAZA-21.jpg"
}

];
}

export default getSpots;