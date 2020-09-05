import { identity } from '~/snisni.config.json'

test('identity configuration set', () => {
  expect(identity.name).toBeDefined();
  expect(identity.logo.alt).toBeDefined();
})
