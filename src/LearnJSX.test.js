import {fireEvent, render, screen} from '@testing-library/react';
import LearnJSX from "./LearnJSX";

test('页面应该有一个包含 《你好，我是 LearnJSX 111》 的元素', () => {
    render(<LearnJSX />);
    const linkElement = screen.getByText(/你好，我是 LearnJSX 111/i);
    expect(linkElement).toBeInTheDocument();
    console.log(linkElement)
});


//TODO:refactor
test('点击页面 《点击+1》按钮前，页面中应该有一个《1》点击页面；《点击+1》按钮后，页面中应该有一个《2》', () => {
    render(<LearnJSX />);

    const num1 = screen.getByText('1')
    expect(num1).toBeInTheDocument();

    const one = screen.getByText('点击+1');
    fireEvent.click(one);

    const num2 = screen.getByText('2')
    expect(num2).toBeInTheDocument();
});
