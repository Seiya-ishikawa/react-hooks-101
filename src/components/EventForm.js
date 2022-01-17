import React, { useState, useContext } from 'react'
import {
    CREATE_EVENT,
    DELETE_ALL_EVENTS
} from '../actions'
import AppContext from '../contexts/AppContext'
const EventForm = ({}) => {
    const { state, dispatch } = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addEvent = e => {
    e.preventDefault()
    dispatch({
        type: CREATE_EVENT,
        title,
        body
        })

        setTitle('')
        setBody('')
    }
    
    console.log({state})
    console.log(state)

    const deleteAllEvents = e => {
      // サブミット(画面更新)を抑止する↓
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result)dispatch({type:DELETE_ALL_EVENTS})
    }

    const unCreatable = title === '' || body === ''
    const unDeletable = state.length === 0
    return (
    <>
    <h4>イベント作成フォーム</h4>
        <form>
            <div className="form-group">
                <label thmlFor="formEventTitle">タイトル</label>
                <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label thmlFor="formEventBody">ボディー</label>
                <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}></textarea>
            </div>
            <button className='btn btn-primary' onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
            <button className='btn btn-danger' onClick={deleteAllEvents} disabled={unDeletable}>すべてのイベントを削除する</button>
        </form>
    </>
    )
}

export default EventForm