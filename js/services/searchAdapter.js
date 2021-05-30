import axios from 'axios'

export const searchPackage = async (term) => {
  try {
    const { data } = await axios.get('https://registry.npmjs.org/-/v1/search',
      {
        params: {
          text: term
        }
      })

    return data.objects.map((result) => {
      return result.package.name
    })
  } catch (err) {
    console.log(err)
  }
}
