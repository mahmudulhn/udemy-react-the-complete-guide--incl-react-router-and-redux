import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Asy Com', () => {
    test('renders post if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'post' }]
        });
        render(<Async />);

        const listElements = await screen.findAllByRole('listitem');
        expect(listElements).not.toHaveLength(0);
    });
});