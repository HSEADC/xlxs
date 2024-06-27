import Airtable from 'airtable'

const token =
  'patd2wiwzbVK3lWvz.a78294c47d622efa508bc74c9add5e0c7dbeeaa8098034c655afa7815950e25f'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
const base1 = Airtable.base('app01KNDrzVa26N5e')
const base2 = Airtable.base('appZHHrH4PFKJs8gA')

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
