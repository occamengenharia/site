const formatDate = (date: Date, returnYear?: false): string => {
  console.log(date, typeof date)

  const [year, month, day] = date.toString().split(/-/g)

  const returnDate = returnYear ? `${day}/${month}/${year}` : `${day}/${month}`

  return returnDate
}

export default formatDate
