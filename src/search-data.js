import Airtable from 'airtable'

const token =
  'pat6LzOtD6z112u0y.092fca3b1384eb7feb00a630917d85e3341fd2a1b27e8d0122ddb40b139d0051'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
let base = Airtable.base('appsTXv3Z43NBOCb6')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base1('Post Teaser')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            tags: record.fields['Tags'],
            image: record.fields['Image'],
            title: record.fields['Title'],
            section: record.fields['Section'],
            category: record.fields['Category'],
            type: record.fields['Type'],
            link: record.fields['Link']
          })
        })

        resolve(content)
      })
  })
}

function getQuizCards() {
  return new Promise((resolve, reject) => {
    const content = []

    base2('Quiz')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            name: record.fields['Name'],
            category: record.fields['Category'],
            place: record.fields['Place'],
            mood: record.fields['Mood'],
            character: record.fields['Character'],
            image: record.fields['Image'],
            link: record.fields['Link']
          })
        })

        resolve(content)
      })
  })
}

export { getPostTeasers, getQuizCards }
