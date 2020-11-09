<template>
  <div id="mc_embed_signup">
    <form
      :action="link"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="is-block"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <b-field position="is-centered">
          <b-input
            type="email"
            placeholder="Our newsletter"
            value=""
            name="EMAIL"
            id="mce-EMAIL"
            class="is-block"
          ></b-input>

          <p class="control">
            <b-button
              type="is-link"
              native-type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
            >
              Subscribe
            </b-button>
          </p>
        </b-field>

        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px" aria-hidden="true">
          <input type="text" :name="code" tabindex="-1" value="" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
}
</script>
