import React, { Component } from 'react'
import Typical from 'react-typical'


const steps = [
  '$ Hello 👋 my name is Manuel', 1000,
  '$ I am a Cloud Consultant', 1000,
  '$ Vist me on social media 👇'
];
export default class App extends Component {
  render () {
    return (
      <div>
        <Typical wrapper="div" steps={steps} loop={1} className={'caca'} />
      </div>
    )
  }
}
