```
function calculaNota(ex, p1, p2) {
  let mediaPonderada = ((ex) + (p1 * 2) + (p2 * 3)) / 6
  let conceito
  if(mediaPonderada >= 9) {
    conceito = "A"
  } else if((mediaPonderada < 9) && (mediaPonderada >= 7.5)) {
    conceito = "B"
  } else if((mediaPonderada < 7.5) && (mediaPonderada >= 6)) {
    conceito = "C"
  } else {
    conceito = "D"
  }
  return conceito
}
```