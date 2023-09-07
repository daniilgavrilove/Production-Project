import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from './SideBar';
import { componentRender } from 'shared/lib/tests/componentRender';

describe('SideBar', () => {
    test('with only first param', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });


});
