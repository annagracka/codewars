function positiveSum(arr) {
    if (arr.length === 0) return 0;
    return arr.filter(el => el > 0).reduce((curr, prev) =>  curr + prev, 0)
  }


console.log(positiveSum([-5,-6]))