function isNumberPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;
    
    
    while (num > 0) {
      let a = num % 10;  
      reversedNum = reversedNum * 10 + a; 
      num = Math.floor(num / 10);  }

    return originalNum === reversedNum;
  }
  
  
  const inputNum = 12321;
  if (isNumberPalindrome(inputNum)) {
    console.log("polindromdur");
  } else {
    console.log("deyildir");
  }