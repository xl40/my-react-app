import { render, screen } from '@testing-library/react';
import LearnJSX2 from "./LearnJSX2";

test('renders learn react link', () => {
    render(<LearnJSX2 />);
    const linkElement = screen.getByText(/你好，我是 LearnJSX 222/i);
    expect(linkElement).toBeInTheDocument();
    console.log(linkElement)
});
