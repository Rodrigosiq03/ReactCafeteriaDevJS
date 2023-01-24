import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BasePage from './index';

test('Deve renderizar um texto = login', () => {
    render(
        <Router>
            <BasePage />
        </Router>
    );
    const loginText = screen.getByText('Login');
    expect(loginText).toBeInTheDocument();
    
})
test('Deve renderizar apenas um botao', () => {
    render(
        <Router>
            <BasePage />
        </Router>
    );
    const buttonObj = screen.getAllByRole('button');
    expect(buttonObj).toHaveLength(1);
    
})