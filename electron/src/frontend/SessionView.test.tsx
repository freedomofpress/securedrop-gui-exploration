import { expect, test } from 'vitest'
import { renderWithProviders } from './tests'
import SessionView from './SessionView'
import { setupStore } from './store'
import { SessionState, set } from './features/session/sessionSlice'

test('greets authenticated journalist by name', async () => {
  const store = setupStore()

  // We never pass data directly to the <SessionView /> component under test.
  // Instead, we mutate the store behind it, calling the same actions used in
  // the real authenticate() function in "Login.tsx"...
  const journalist: SessionState = {
    journalist_first_name: 'Daniel',
    journalist_last_name: 'Ellsberg',
    journalist_uuid: 'fake',
    expiration: 'fake',
  };
  store.dispatch(set(journalist));

  // ...render <SessionView /> using this prepared store...
  const { getByText, getByTestId } = renderWithProviders(<SessionView />, {store});

  // ...and then interact with the rendered component directly.
  const debug = getByTestId('debug');
  expect(debug).toHaveTextContent(journalist.journalist_first_name);
  expect(debug).toHaveTextContent(journalist.journalist_last_name);

  const greeting = getByText(/Hello/);
  expect(greeting).toHaveTextContent(`${journalist.journalist_first_name} ${journalist.journalist_last_name}`);
});