function isValidWalk(args) {
    let endPoint = [0, 0]
    let duration = 0;

    args.forEach(step => {
        duration++
        if (step === 'n') return endPoint[1]++;
        if (step === 's') return endPoint[1]--;
        if (step === 'w') return endPoint[0]++;
        if (step === 'e') return endPoint[0]--;
        console.log(duration)
    })
    return (endPoint[0] === 0 && endPoint[1] === 0 && duration === 10);
  }


console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) //, 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) //, 'should return false');
console.log(isValidWalk(['w'])) //, 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) //, 'should return false');
