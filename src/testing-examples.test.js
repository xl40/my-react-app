import {render, waitFor} from "@testing-library/react";
import React from 'react';

const HelloMessage = ({name}) => {
    return (
        <>
            <h1>hello {name}</h1>
        </>
    )
};

it('renders personalized greeting', async () => {
    // Render new instance in every test to prevent leaking state
    const { getByText } = render(<HelloMessage name="Satoshi" />);

    await waitFor(() => getByText(/hello Satoshi/i));
});
