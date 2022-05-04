//Activity 4:
//> Create 9 variables: space1, space2... space9.
//> Assign either the value ‘x’,’o’,’ ‘, to each of these variables.
//> Insert the variables into your board using the ${varName} syntax and make it look like the displayed board.


let     [space1, space2, space3] = ['x','o',' ']
    ,   [space4, space5, space6] = ['x','x',' ']
    ,   [space7, space8, space9] = ['0',' ',' ']

let board = `
  ${space1} | ${space2} | ${space3}
 -----------
  ${space4} | ${space5} | ${space6} 
 -----------
  ${space7} | ${space8} | ${space9} 
`
console.log( board );