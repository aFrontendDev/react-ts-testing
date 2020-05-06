import React from 'react'
import { render, cleanup } from '@testing-library/react';
import Hello from './Hello.tsx';

afterEach(cleanup);

describe("Hello component", () => {
    test("should render text - 'Using X in Y'", () => {
        const { getByText } = render(<Hello compiler="X" framework="Y" />);
        console.log(getByText);
        expect(getByText("Using X in Y")).toBeTruthy();
    });
});
