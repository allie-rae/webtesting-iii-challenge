// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Display from './Display';

test("Display renders without crashing", () => {
    render(<Display />)
})

