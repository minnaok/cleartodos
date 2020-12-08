import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';


test('add todo', () => {
const{ container, getByText, getByPlaceholderText } = render(<App/>);
const desc= getByPlaceholderText('Description');
fireEvent.change(desc, { target:{ value:'Go to coffee' } 
}) 
const date= getByPlaceholderText('Date');
fireEvent.change(date, { target:{ value:'29.11.2019' } })
const button= getByText('Add');fireEvent.click(button);
expect(container).toHaveTextContent('Go to coffee');
})

test('clear todos', () => {
    const{ container, getByText, getByPlaceholderText } = render(<App/>);
    const desc= getByPlaceholderText('Description');
    fireEvent.change(desc, { target:{ value:'Go to coffee' } 
    }) 
    const date= getByPlaceholderText('Date');
    fireEvent.change(date, { target:{ value:'29.11.2019' } })
    const button= getByText('Clear');fireEvent.click(button);
    expect(container).not.toHaveTextContent('Go to coffee');
    })
