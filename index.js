function distanceFromHqInBlocks(userLocation){
    const hq = 42
    if(userLocation > hq){
        return userLocation - hq
    } else if(userLocation < hq){
        return hq - userLocation
    }
}

function distanceFromHqInFeet(userLocation){
    const feetAway = distanceFromHqInBlocks(userLocation) * 264
    return feetAway
}

function distanceTravelledInFeet(travStart, travEnd){
    if (travStart < travEnd) {
        return (travEnd - travStart) * 264
    } else if (travStart > travEnd){
        return (travStart - travEnd) * 264
    }
}

function calculatesFarePrice(travStart, travEnd){
    const travTotal = distanceTravelledInFeet(travStart, travEnd)
    if(travTotal < 400){
        return 0
    } else if(travTotal > 400 && travTotal < 2000){
        return (travTotal - 400) * .02 
    } else if(travTotal > 2000 && travTotal < 2500){
        return 25
    } else {
        return "cannot travel that far"
    } 
}