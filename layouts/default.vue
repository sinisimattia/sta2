<template>
  <div>
    <b-navbar wrapper-class="container" class="sticky-top">
      <template #brand>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
          <img v-if="logo.image" :src="logo.image" />
          <p v-else class="title">{{ logo.alt }}</p>
        </b-navbar-item>
      </template>

      <template #start>
        <b-navbar-item
          v-for="page in pages"
          :key="page.href"
          tag="nuxt-link"
          exact-active-class="has-text-primary"
          :to="page.href"
        >
          <IconLabel :icon="page.icon.name" :pack="page.icon.pack">{{
            page.name
          }}</IconLabel>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <nuxt-link
            :to="cta.href"
            class="button is-primary has-margin is-rounded"
          >
            <IconLabel :icon="cta.icon.name" :pack="cta.icon.pack">{{
              cta.name
            }}</IconLabel>
          </nuxt-link>
        </b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content">
      <div>
        <nuxt />
      </div>
    </section>

    <section class="footer">
      <div class="container">
        <section class="columns is-vcentered">
          <aside class="column is-two-thirds" v-if="links.newsletter">
            <p class="title has-text-centered is-2">Never miss an update!</p>
            <NewsletterForm />
            <p class="subtitle has-text-centered">Don't worry, we hate spam.</p>
          </aside>

          <aside class="column">
            <CoolLink
              v-for="link in contacts"
              :key="link.href"
              :to="link.href"
              :icon="link.icon.name"
              :pack="link.icon.pack"
              >{{ link.name }}</CoolLink
            >
          </aside>

          <aside class="column">
            <CoolLink :to="links.privacy_policy" icon="lock"
              >Privacy Policy</CoolLink
            >
            <CoolLink :to="links.report_issues" icon="bug"
              >Spotted a bug?</CoolLink
            >
          </aside>
        </section>

        <section class="section has-text-centered">
          <span>{{ credit }}</span>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { links, identity } from '~/snisni.config.json'
import { navigation } from '@/config/navigation.json'
import { contacts } from '@/config/contacts.json'

import CoolLink from '~/components/molecoles/CoolLink'
import IconLabel from '~/components/atoms/IconLabel'
import BuyMeACoffee from '~/components/prefabs/BuyMeACoffee'
import NewsletterForm from '~/components/prefabs/NewsletterForm'

export default {
  components: {
    CoolLink,
    IconLabel,
    BuyMeACoffee,
    NewsletterForm,
  },

  data() {
    return {
      links,
      contacts,
      pages: navigation.pages,
      cta: navigation.cta,
      logo: identity.logo,
      credit: identity.credit,
    }
  },
}
</script>

<style scoped>
.main-content {
  margin-bottom: 20px;
}
</style>
