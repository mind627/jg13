import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Form() {
  const [writer , setWriter] = useState("")
  const [title , setTitle] = useState("")
  const [text , setText] = useState("")
  const onChange = (e) => {
    const {name} = e.target
    if(name === 'writer') {
      setWriter(e.target.value)
    } else if(name === 'title') {
      setTitle(e.target.value)
    } else if (name === 'text') {
      setText(e.target.value)
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      writer,
      title,
      text
    }
    console.log(body);
    setWriter('')
    setTitle('')
    setText('')
    axios
      .post("http://localhost:4000/posts", body)
      .then((res) => console.log(res));
  }
  return (
    <>
      <Link to={'/'}>뒤로가기</Link>
    <form onSubmit={onSubmit}>
      <label>작성자 : </label>
      <input onChange={onChange} name="writer" type={'text'} placeholder="작성자" value={writer}/>
      <label>title : </label>
      <input onChange={onChange} name="title" type={'text'} placeholder="title" value={title}/>
      <label>내용</label>
      <textarea onChange={onChange} name='text' value={text}></textarea>
      <button type='submit'>제출</button>
    </form>
    </>
  )
}