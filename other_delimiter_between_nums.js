/* if first num is 0 => current
if previous num is 0 => current
if previous num % 2 === 0 && current % 2 === 0 => *current
if previous num % 2 !== 0 && current % 2 !=== 0 => -current
else => current
*/

function addDelimiter(num) {

    const numList = String(num).split('');
    let withDelimiter = '';
    
    numList.forEach((current, index) => {
    
        if (index === 0 || numList[index - 1] === '0') {withDelimiter += current}
    
        else if (Number(current) % 2 === 0 && Number(numList[index - 1]) % 2 === 0) {
            withDelimiter +=  `*${current}`;
        }

        else if (Number(current) % 2 !== 0 && Number(numList[index - 1]) % 2 !== 0) {
            withDelimiter +=  `-${current}`;
        }

        else { withDelimiter += current;}
    })

    return withDelimiter;
    }
    
    console.log(addDelimiter(34566899))
    console.log(addDelimiter(123450899))
    console.log(addDelimiter(34456677899))