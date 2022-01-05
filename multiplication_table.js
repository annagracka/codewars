multiplicationTable = function(size) {

    const table = [];

    for (let arr = 0; arr < size; arr++) {
        table.push([]);

        for (let num = 1; num < size + 1; num++) {

            if (table.length === 1) {
                table[arr].push(num);
                if (num === size) {
                    continue;
                }

            } else {
                table[arr].push(table[0][arr] * num)
            }
        }
    }
    return table;
  }

console.log(multiplicationTable(3)) //, [[1,2,3], [2,4,6], [3,6,9]])
