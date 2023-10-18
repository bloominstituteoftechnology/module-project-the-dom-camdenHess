function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in

  const widgets = document.querySelectorAll('section div')
  widgets.forEach((widget, i) => {
    widget.classList.add('widget')
    widget.setAttribute('tabindex', i + 1)
  })


  // 👉 TASK 2 - Build a "Quote of the Day" widget
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]

    const widget1 = document.querySelector('.quoteoftheday')

    const quote = document.createElement('div')
    const quoteText = randomQuote.quote
    quote.textContent = quoteText
    widget1.appendChild(quote)

    const authorDate = document.createElement('div')
    const {author, date} = randomQuote
    authorDate.textContent = `${author} in ${date === null ? "an unknown date" : date}`
    widget1.appendChild(authorDate)


  // 👉 TASK 3 - Build a "Corporate Speak" widget
  let randomIdx = Math.floor(Math.random() * 10)
  let randomIdx2 = Math.floor(Math.random() * 10)

  let randomAdverb = adverbs[randomIdx]
  let randomNoun = nouns[randomIdx]
  let randomVerb = verbs[randomIdx]

  let randomAdverb2 = adverbs[randomIdx2]
  let randomNoun2 = nouns[randomIdx2]
  let randomVerb2 = verbs[randomIdx2]
  
  let corpSpeak = document.querySelector('.corporatespeak')
  let corpPara = document.createElement('p')
  corpPara.textContent = `We need to ${randomVerb} our ${randomNoun} ${randomAdverb} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`
  corpSpeak.appendChild(corpPara)


  // 👉 TASK 4 - Build a "Countdown" widget
    const countdownWidget = document.querySelector('.countdown')
    let countdown = 5
    const countdownPara = document.createElement('p')
    countdownPara.textContent = `T-minus ${countdown}...`
    countdownWidget.appendChild(countdownPara)
    
    const id = setInterval(() => {
      if (countdown === 1) {
        countdownPara.textContent = 'Liftoff! 🚀'
        clearInterval(id)
      } else {
        countdownPara.textContent = `T-minus ${--countdown}...`
      }
    }, 1000)


  // 👉 TASK 5 - Build a "Friends" widget
    const randomPeopleIndex = Math.floor(Math.random() * people.length)
    const randomPerson = people[randomPeopleIndex]

    const friendsWidget = document.querySelector('.friends')
    const friendsPara = document.createElement('p')

    const {fname, lname, dateOfBirth, friends} = randomPerson
    const dateArray = dateOfBirth.split('-')
    const year = dateArray[0]

    let sentence = `${fname} ${lname} was born in ${year} and `

    if (friends.length === 0) {
      sentence += 'has no friends.'
    } else {
      sentence += 'is friends with '

      for (let i = 0; i < friends.length; i++) {
        const friendId = friends[i]
        const friend = people.find(person => person.id === friendId)
        const friendName = `${friend.fname} ${friend.lname}`
        let isLastFriend = i === friends.length -1
        let isNextToLast = i === friends.length -2
        if (isLastFriend) {
          sentence += `${friendName}.`
        } else if (isNextToLast) {
          sentence += `${friendName} and `
        } else {
          sentence += `${friendName}, `
        }
      }
    }
    friendsPara.textContent = sentence

    friendsWidget.appendChild(friendsPara)

  // 👉 TASK 6 - Make it so user can tab through the widgets

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
