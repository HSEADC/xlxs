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

    base('teasers')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            tags: record.fields['Tags'],
            title: record.fields['Title'],
            description: record.fields['Description'],
            image: record.fields['Image'],
            url: record.fields['URL']
          })
        })

        resolve(content)
      })
    console.log(content)
  })
}

export { getPostTeasers }
