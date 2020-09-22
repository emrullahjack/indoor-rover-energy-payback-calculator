/*
  --- Indoor Rover Energy Payback Calculator ---
  author: Emrullah Jack Oztosun
  licencse: GNU General Public License v3.0
  notes: A real world application of this calculator can be seen at: https://www.gocheni.com/utilities/updates_and_announcements/
  sources:
    Price of 1kg long grain white rice in CAD, as of 09/2020: https://www.walmart.ca/en/ip/great-value-long-grain-white-rice/6000187054952
    Calories in 1kg rice: https://en.wikipedia.org/wiki/Rice
    The "calorie" we refer to in food is actually kilocalorie: https://www.nutrition.gov/faqs
*/


const priceOfKgRice = 1.99; // price of 1kg long grain white rice in CAD
const caloriesInKgRice = 1303.80; // calories in 1kg rice
const joulesInKgRice = caloriesInKgRice * 4184; // joules in 1kg rice

// just like calorie, joule is a unit of energy but it is the SI unit of energy

class TransportationOperation {
  constructor(distanceRidden, weightCarried, frequency) {
    this.distanceRidden = distanceRidden; // in m
    this.weightCarried = weightCarried; // in kg
    this.frequency = frequency; // number of times this operation is being carried out in a month
  }
}

const TransportationOperation1 = new TransportationOperation(65, 3, 10);

// calculate the energy payback of the indoors rover in months
function calculateEnergyPayback(rowerPrice, transportationOperations) {
  for (let i = 0; i < transportationOperations.length; i++) {
    // to be continued...
  }
}
