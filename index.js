// Code your solution in this file!
// function distanceFromHqInBlocks(pickuplocation) {
//     return Math.abs (pickuplocation - 42);
//   }
  
//   function distanceFromHqInFeet(pickuplocation) {
//     return distanceFromHqInBlocks(pickuplocation) * 264;
//   }
  
//   function distanceTravelledInFeet(start, end) {
//     return Math.abs(end - start) * 264;
//   }
  
//   function calculatesFarePrice(start,destination){
//     const distance = distanceTravelledInFeet(start, end);

//   if (distance <= 400) {
//     return 0;
//   } else if (distance > 400 && distance <= 2000) {
//     return (distance - 400) * 0.02;
//   } else if (distance > 2000 && distance < 2500) {
//     return 25;
//   } else {
//     return 'cannot travel that far';
//   }
// }

function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }
  
  function distanceTravelledInFeet(start, end) {
    return Math.abs(end - start) * 264;
  }
  
  function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }