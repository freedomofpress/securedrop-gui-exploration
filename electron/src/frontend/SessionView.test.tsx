import { expect, test } from 'vitest'
import { renderWithProviders } from './tests'
import SessionView from './SessionView'

test('renders name if set', async () => {
  const { getByText } = renderWithProviders(<SessionView />);
});