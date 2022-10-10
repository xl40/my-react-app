// https://www.codecademy.com/courses/learn-react-testing
import { render, screen } from '@testing-library/react'
const Greeting = () => {
    return (
        <>
            <h1>Hello World</h1>
            <button type="button" disabled>Submit</button>
        </>
    )
};

test('should prints out the contents of the DOM' ,() => {
    render(<Greeting />);
    const h1 = screen.getByText(/hello world/i);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    screen.debug();
});
