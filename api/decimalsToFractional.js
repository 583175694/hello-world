function decimalsToFractional(decimals) {
  const formatDecimals = decimals.toFixed(2)
  let denominator = 100 // 初始化分母
  let numerator = formatDecimals * 100 // 初始化分子

  // 约分
  function recursion() {
    console.log(numerator, denominator)
    let min = Math.min(numerator, denominator); // 较小的
    for (let i = min; i > 1; i--) {
      if (Number.isInteger(numerator / i) && Number.isInteger(denominator / i)) {
        numerator = numerator / i
        denominator = denominator / i
        recursion()
      }
    }
  }
  recursion()

  if (decimals % 1 === 0) { // 入参为整数时 直接返回
    return `${decimals}`
  } else if (numerator / denominator > 1) { // 分子大于分母 
    return `${parseInt(numerator / denominator)} + ${numerator % denominator} / ${denominator}`
  } else { // 分子小于分母
    return `${numerator} / ${denominator}`
  }
}
console.log(decimalsToFractional(1.5)) // 1/2
console.log(decimalsToFractional(20)) // 20
console.log(decimalsToFractional(5 / 2)) // 2+1/2