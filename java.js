// Bai 1
// const a = prompt('Nhập 1 số :');
// if (a % 2 == 0) {
//     console.log('là số chẵn');
// } else {
//     console.log('là số lẻ');
// }
function checkParity(number) {
  let result = 8;
  if (number % 2 == 0) {
    result = true;
  } else if (number % 2 != 0) {
    result = false;
  }

    return result;
}
console.log(checkParity(8));
// Bai 2

function checkNegativePositive(number) {
  let result = "";
  if (number < 0) {
    if (checkParity(number)) {
      result = "số âm và chẵn";
    } else if (checkParity(number) == false) {
      result = "Số âm và lẽ";
    }
  } else if (number == 0) {
    result = "không không âm không dương";
  } else if (number > 0) {
    if (checkParity(number)) {
      result = "số dương và chẵn";
    } else if (checkParity(number) == false) {
      result = "Số dương và lẽ";
    }
  }
  return result;
}
console.log(checkNegativePositive(7));
//bài 2: Viết hàm với tham số đầu vào là 1 số trong tháng (1 tới 12), kiểm tra và in ra tháng đó có bao nhiều ngày?
function checkMonth(month) {
  let result = "";
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      result = "Tháng " + month + " có 31 ngày";
      break;
    case 2:
      result = "Tháng " + month + " có 28 hoặc 29 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      result = "Tháng " + month + " có 30 ngày";
      break;
  }
  return result;
}
console.log(checkMonth(2));

// bài 3: Viết hàm với đầu vào là 1 số bất kỳ, kiểm tra số đó và in ra là số nguyên dương hay số nguyên âm, nếu không phải cả 2 thì in ra không phải số cần kiểm tra.
function checkInteger(number) {
  let result = "";
  if (Number.isInteger(number)) {
    if (number < 0) {
      result = "Số nguyên âm";
    } else if (number > 0) {
      result = "Số nguyên dương";
    } else {
      result = "Không phải số cần kiểm tra";
    }
  } else {
    result = "Không phải số nguyên";
  }
  return result;
}
console.log(checkInteger(5));
// bài 4: Viết hàm tính tổng 2 số với tất cả các phép tính (+ - * / %) thông qua tham số truyền vào

function listNumber(number1, number2, operator) {
    if(!isNaN(number1) && !isNaN(number2)) {
        switch(operator) {
            case '+': {
                return number1 + number2;
                break;
            }
            case '-': {
                return number1 - number2;
                break;
            }
            case '*': {
                return number1 * number2;
                break;
            }
            case '/': {
                if (number2 === 0) {
                    return 'Số bị chia không thể bằng 0!';
                } else {
                    return number1 / number2;
                }
            }
            case '%': {
                return number1 % number2;
                break;
            }
            default: {
                return 'Bạn nhập sai toán tử rồi!';
            }
        }
    }
    else {
        return 'Số bạn nhập vào chưa đúng!';
    }
}
console.log(listNumber(2, 1, '*'));