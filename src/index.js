
// You should implement your task here.

module.exports = function towelSort (matrix) {
var result = [];
if(matrix === undefined){
    return [];
}
let a =0;
for(let i = 0;i < matrix.length;i++){
    if( i % 2 === 0 ){
        for(let j = 0; j < matrix[i].length; j++){
            result[a] = matrix[i][j];
            a++;
        }
    }
    else {
        for(let j = matrix[i].length-1; j >= 0; j--){
          result[a] = matrix[i][j];
          a++;
        }
      }

}
return result;
}

