import React from "react";
import { useSelector } from 'react-redux'

import List from './List';

import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const style = {
    display: 'flex',
    padding: '10px'
}

export default () => {
    const lists = useSelector(state => Object.values(state.lists).sort((a, b) => a.id - b.id));

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="lists" style={style}>
                {
                    lists.map(list => <List key={list.id} {...list} />)
                }
            </div>
        </DndProvider>
    )
}