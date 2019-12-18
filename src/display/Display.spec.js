// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Display from './Display';

test("Display renders without crashing", () => {
    const display = render(<Display />);
    expect(display.asFragment()).toMatchSnapshot();
})


test("Displays Open & Unlocked", () => {
    const display = render(<Display closed={false} locked={false} />);

    expect(display.getByTestId('lockedDisplay')).toBeInTheDocument();
    expect(display.getByTestId('closedDisplay')).toBeInTheDocument();

})

test("Displays Closed & Locked", () => {
    const display = render(<Display closed={true} locked={true} />);

    expect(display.getByTestId('lockedDisplay')).toBeInTheDocument();
    expect(display.getByTestId('closedDisplay')).toBeInTheDocument();

})

test("Displays unlocked & green Classes", () => {
    const display = render(<Display closed={false} locked={false} />);
    const lockedDisplay = display.getByText(/unlocked/i);
    lockedDisplay.classList.contains('green-led') && expect(lockedDisplay.textContent).toMatch(/unlocked/i);
})

test("Displays locked and red class", () => {
    const display = render(<Display closed={true} locked={true} />);

    const closedDisplay = display.getByText(/closed/i)

    expect(display.getByText(/locked/i));
    expect(closedDisplay.classList.contains('red-led'));

})
