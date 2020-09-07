import { identity, links } from '~/snisni.config.json'

test('identity configuration set', () => {
  expect(identity.name).toBeDefined()
  expect(links.privacy_policy).toBeDefined()
  expect(identity.logo.alt).toBeDefined()
})
