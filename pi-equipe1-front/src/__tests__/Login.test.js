import { render, screen } from '@testing-library/react';
import Login from  '../pages/Login/index.js' ;
import { BrowserRouter } from 'react-router-dom';

test('get text', () => {
  render( <BrowserRouter><Login /></BrowserRouter> );
  const text = screen.getByText('Ainda não tem uma conta?');
  expect(text).toBeInTheDocument();
});
