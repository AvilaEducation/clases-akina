const cards = [
    {
      "date":'2023-03-18T00:00:00'
    },
      {
      "date":'2025-03-18T00:00:00'
    },
    {
      "date":'2024-03-18T00:00:00'
    },
    {
      "date":'2024-03-18T00:00:00'
    }
  ]
  
  const cardToTime = card => new Date(card.date).getTime();
  
  // const cardToTime = card => {
  //   const stringDate = card.date
  //   const date = new Date(stringDate)
  //   return date.getTime()
  // }
  
  console.log(cards
    .toSorted((cardA, cardB) => cardToTime(cardA) - cardToTime(cardB))
  .map(card => card.date.substring(0, 4)))