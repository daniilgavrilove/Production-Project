import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('with only first param', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
