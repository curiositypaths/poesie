import React from 'react'

export default function PoemForm(props) {
    return (<form>
            <input onChange={props.handlePoemInputChange} type='text' value={props.body}/>
            <button type='submit' >Add poem</button>
          </form>)
  }