export function isMissed(arrow, fallingArrows) {
  let arrowPosition = arrow.position.y
  let missed = true
  let exit = false

  fallingArrows.forEach(fallingArrow => {
    

    if ((fallingArrow.position.y - arrowPosition) < 38 && (fallingArrow.position.y - arrowPosition) > -38) {
      missed = false
    }
  })


  
  return missed
}