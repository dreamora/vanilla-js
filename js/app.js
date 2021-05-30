
import { searchPackage } from './services/searchAdapter'

const setState = (callback) => {
  callback()
  console.time('updateTree')
  updateTree()
  console.timeEnd('updateTree')
}
//
const App = function _App () {
  return `
                <h1>Hello Vanilla JS World ${_App.state.count}</h1>
                <div class="content">Example of state management in Vanilla JS</div>
                <button id="incrementWorld">Create a new world</button>
            `
}

App.state = {
  count: 1,
  increment: () => {
    setState(() => App.state.count++)
  }
}

const updateTree = () => {
  document.getElementById('app').innerHTML = App()
  document.getElementById('incrementWorld').addEventListener('click', () => {
    App.state.increment()
    searchPackage('react').then((packages) => {
      console.log(packages ?? 'no packages found')
    })
  })
}

updateTree()

export default App()
