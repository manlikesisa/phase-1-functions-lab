// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42); 
  }

  function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264; 
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free ride
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // Charge 2 cents per foot for the distance above 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25
    } else {
      return 'cannot travel that far'; // If the distance is more than 2500 feet
    }
  }
  
  