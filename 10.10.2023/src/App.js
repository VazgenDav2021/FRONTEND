import React from 'react'
import './App.css'
import { useGetPostsQuery } from './feature/api/posts'

const App = () => {
  const { isError, isLoading, data } = useGetPostsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if(isError){
    return <h1>Something went wrong...</h1>
  }

  return (
    <div>{data.map(eachData=>{
      return <li key={eachData.id}>{eachData.title}</li>
    })}</div>
  )
}

export default App