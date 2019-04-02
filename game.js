let player1 = prompt('Player One: Enter your name, you will be Blue')
let player1Color = 'rgb(86, 151, 255)'

let player2 = prompt('Player Two: Enter your name, you will be Red')
let player2Color = 'rgb(237, 45, 73)'

let game_on = true
let table = $('table tr')


const reportWin = (rowNum, colNum)=>{
  console.log('You won starting at this row, col')
  console.console.log(rowNum)
  console.console.log(colNum)
}


changeColor = (  rowIndex, colIndex, color)=>{
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css
  ('background-color', color)
}

returnColor = (rowIndex, colIndex)=>{
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css
  ('background-color')
}

checkBottom = (colIndex)=> {
  let colorReport = returnColor(5, colIndex)
    for ( let row =5; row >-1; row--){
      colorReport = returnColor (row, colIndex)
      if (colorReport=== 'rgb(128, 128, 128)'){
        return row
      }
    }
}

colorMatchCheck = (one, two, three, four)=>{
  return (one===two && one===three && one===four && 
    one !== 'rgb(128, 128, 128)' && one !== undefined)
}

//Check for Horizontal wins

horizontalWinCheck =()=>{
  for (let row = 0; row <6; row++){
    for (let col = 0; col < 4; col++){
      if (colorMatchCheck(
        returnColor(row, col), 
      returnColor(row, col+1), 
      returnColor(row, col+2), 
      returnColor(row, col+3), 
      returnColor(row, col+4), 
      returnColor(row, col+5))){
        console.log('horiz')
        reportWin(row, col)
        return true
      } else {
        continue
      }
    }
  }
}


// Check for vertical wins
verticalWinCheck =()=>{
  for (let col = 0; col <7; col++){
    for (let row = 0; row < 3; row++){
      if (colorMatchCheck(
        returnColor(row, col), 
      returnColor(row, col+1), 
      returnColor(row, col+2), 
      returnColor(row, col+3), 
      returnColor(row, col+4), 
      returnColor(row, col+5))){
        console.log('vertical')
        reportWin(row, col)
        return true
      } else {
        continue
      }
    }
  }
}

// Diagonal win check 

diagonalWinCheck =()=>{
  for (let col = 0; row <5; col++){
    for (let col = 0; col < 7; col++){
      if (colorMatchCheck(
        returnColor(row, col), 
      returnColor(row+1, col+1), 
      returnColor(row+2, col+2), 
      returnColor(row+3, col+3), 
      returnColor(row+4, col+4), 
      returnColor(row+5, col+5))){
        console.log('diag')
        reportWin(row, col)
        return true
      } else if(colorMatchCheck(
        returnColor(row, col), 
        returnColor(row-1, col+1),
        returnColor(row-2, col+2),
        returnColor(row-3, col+3),
        returnColor(row-4, col+4),
        returnColor(row-5, col+5)
        ))
      {
        console.log('diag')
        reportWin(row, col)
        return true
      }else{
        continue
      }
    }
  }
}


// Start with player 1
let currentPlayer = 1
    currentName = player1
    currentColor = player1Color

$('h3').text(player1 + ' it is your turn, pick a column to drop in!')

$('.board button').on('click', function(){
    let col = $(this).closest('td').index()
    let bottomAvail = checkBottom(col)
    changeColor(bottomAvail, col, currentColor)

    if(horizontalWinCheck || verticalWinCheck || diagonalWinCheck){
      $('h1').text(currentName + ' you have won!')
      $('h3').fadeOut('fast')
      $('h2').fadeOut('fast')
    }
    currentPlayer =   currentPlayer*-1

    if(currentPlayer === 1){
      currentName = player1
      $('h3').text(currentPlayer + ' it is your turn.')
      currentColor = player1Color
    }else{
      currentName = player2
      $('h3').text(currentName + ' it is your turn')
      currentColor = player2Color
    }
  })