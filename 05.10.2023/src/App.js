import React, { useEffect } from 'react';
import { getCurrentPost, getPosts } from './redux/action/actions'
import ClipLoader from "react-spinners/ClipLoader";
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, hasError, posts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPosts());
  }, [])

  if (isLoading) {
    return <ClipLoader
      size={150}
      color={"#123abc"}
      loading={isLoading}
      speedMultiplier={1.5}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  }

  if (hasError) {
    return <h1 style={{ color: "red" }}>Something went wrong, please reload the page</h1>
  }

  return (
    <div style={{ display: 'flex', justifyContent: "space-between" }}>
      <div>
        {posts?.map(({ title, id }) => {
          return <Post key={id} {...{ title, id }} />
        })}
      </div>

      <CurrentPost />
    </div>
  )
}

function Post({ title, id }) {
  const dispatch = useDispatch()

  const handleSelectPost = () => {
    dispatch(getCurrentPost(id))
  }

  return <li onClick={handleSelectPost}>{title}</li>
}

function CurrentPost() {
  const { currentPost } = useSelector(state => state)
  console.log({ currentPost });
  return <p>Current Post: {currentPost.title}</p>
}

export default App


// 1 Создать новый метод в редакс для проведения запросов на кокнрентый пост (https://jsonplaceholder.typicode.com/posts/1)
// 2 При клике на определенный пост сделать запрос и внизу отрабрить выбранный пост который к нам пришел из сервера
// 3 Отаброзить выбранный пост в дргуом компоненте