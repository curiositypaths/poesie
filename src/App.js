import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PoemForm from './poemForm'

function Poem(props) {
  const ratings = [1,2,3,4,5]
  return <div>
          <p onClick={()=>props.handleSelectPoemForUpdate(props.poemId,props.body)}>{props.body}</p>
          <select>
            {ratings.map( ratingScore => {
              return <option key={ratingScore} selected={ratingScore===props.rating ? true : false} >{ratingScore}</option>
            } )}
          </select>
        </div>
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poems:[
        {
            id:1,
            body:"Poem one",
            rating:2
        },
            {
                id:2,
                body:"Poem two good poem",
                rating:5
                
            },
        ],
      poemInput: {
        body: "Poem two good poem...",
        poemId:null
    }
    }
  }

  handleSelectPoemForUpdate = (id,body) => {
    console.log(id,body)
    this.setState(
      {
        poemInput: {
          body: body,
          poemId: id
      }
      }
    )
  }

  handlePoemInputChange = event => {
    this.setState({
      poemInput:{
        ...this.state.poemInput,
        body:event.target.value
      }
    })
  }

  render() {
    return (
      <div>
          <PoemForm handlePoemInputChange={this.handlePoemInputChange} something body={this.state.poemInput.body}/>

        <div>
          {this.state.poems.map( poemObj=><Poem handleSelectPoemForUpdate={this.handleSelectPoemForUpdate} key={poemObj.id} body={poemObj.body} rating={poemObj.rating} poemId={poemObj.id}/> )}
        </div>
      </div>
    );
  }
}

export default App;
