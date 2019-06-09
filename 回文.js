function fn(str) {
   if ( str === str.split('').reverse().join('')){
       return true
   } else {
       return false
   }
}
console.log(fn('abba'));