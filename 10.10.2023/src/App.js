import React from 'react'
import './App.css'
import { useCreatePostMutation, useGetPostsQuery } from './feature/api/posts'

const App = () => {
  const { isError, isLoading, data } = useGetPostsQuery();
  const [createPost, { data: createdData, error, isLoading: creatLoding }] = useCreatePostMutation()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>Something went wrong...</h1>
  }

  const addPost = () => {
    createPost({ title: "Hello World", body: "How are you", userId: 123 })
  }

  console.log({ createdData });

  return (
    <>
      <div>{data.map(eachData => {
        return <li key={eachData.id}>{eachData.title}</li>
      })}</div>

      <button onClick={addPost}>Click</button>
    </>
  )
}

export default App

// 1. Создать функционал для добавления поста
// 2. Добавить метода для добавления поста в rtk