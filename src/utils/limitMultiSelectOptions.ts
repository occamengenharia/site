export default function limitMultiSelectOptions(event): void {
  let selectedCounter = 0

  if (event) {
    event.forEach(() => {
      selectedCounter++
    })

    // caso o número de itens for maior que 2, ele vai remover o último item adicionado, ou seja, não vai ocorrer nada
    if (selectedCounter > 2) {
      event.pop()
    }
  }
}
