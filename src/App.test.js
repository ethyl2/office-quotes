import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import Header from './components/Header';
import { act } from 'react-dom/test-utils';

/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
})


describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
*/

describe('<Header />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});

test('<App /> matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders success text', () => {
  const { getByText, findByText } = render(<App />);
  act(() => {
    fireEvent.click(getByText('Get Message!')); 
  });
  findByText(/success/i);
  //const tester = getByText(/success/i);
  //expect(tester).toBeInTheDocument();
  //console.log(successEl);
});

