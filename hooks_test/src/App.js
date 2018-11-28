import React, { useReducer, useContext, useEffect } from 'react';


const funcSwitchCase = cases => defaultCase => key =>
    (cases.hasOwnProperty(key) ? cases[key] : defaultCase)()


const appReducer = (state, action) =>
    funcSwitchCase({
        'reset': () => action.payload,
        'add': () => state.concat({ id: Date.now(), text: '', completed: false }),
        'delete': () => state.filter(item => item.id !== action.payload),
        'completed': () => state.map(item => item.id === action.payload ? { ...item, completed: !item.completed } : item)
    })(state)(action.type)



const CONTEXT = React.createContext()


export default () => {
    console.log(useReducer)
    const [ state, dispatch ] = useReducer(appReducer, [])

    useEffect(() => {
        const rawData = localStorage.getItem('data')
        dispatch({ type: 'reset', payload: rawData ? JSON.parse(rawData): [] })
    }, [])

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(state))
    }, [state])
    
    return (
      <CONTEXT.Provider value={dispatch}>
        <header>
          TODO App, hooks test
        </header>
        <button onClick={() => dispatch({ type: 'add' })}>New todo</button>
        <br />
        <br />
        <TodoList items={state} />
      </CONTEXT.Provider>
    )
}


const TodoList = ({ items }) => 
    items.map(item => 
        <TodoItem key={item.id} {...item} />
    )


const TodoItem = ({ id, completed, text }) => {
    const dispatch = useContext(CONTEXT)

    return (
        <div>

            <input 
                type="checkbox"
                checked={ completed }
                onChange={ () => dispatch({ type: 'completed', payload: id }) }
            />
            <input
                type="text"
                defaultValue={ text }
            />
            <button
                onClick={ () => dispatch({ type: 'delete', payload: id }) }
            >
                Delete
            </button>
        </div>
    )
}


