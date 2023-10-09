<script setup>
import websiteContent from "../data.json";
import CardTemplate from "../components/CardTemplate.vue";

const {
  // appendData,
  bannerText,
  bannerTitle,
  backgroundURL,
  getInTouchLabel,
  getInTouchSubtext,
  locationLabel,
  locations,
  // mailLabel,
  mapLabel,
  // messageLabel,
  // nameLabel,
  // submitLabel
} = websiteContent.contact;
</script>

<template>
  <div
    class="banner"
    :style="{
      background: `linear-gradient(rgba(17, 24, 39, 0.6), rgb(17, 24, 39), rgb(17, 24, 39)), url('${backgroundURL}')`,
    }"
  >
    <div class="banner__content-wrapper">
      <h1 class="banner__content-wrapper_title">{{ bannerTitle }}</h1>
      <p>{{ bannerText }}</p>
      <form>
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
      </form>
    </div>
    <div class="contact-details">
      <div class="contact-details__form-wrapper">
        <h1>{{ getInTouchLabel }}</h1>
        <p>{{ getInTouchSubtext }}</p>
      </div>
      <div class="location-wrapper">
        <h1 class="location-wrapper__location-label">{{ locationLabel }}</h1>
        <div class="location-wrapper__line"></div>
        <div class="location-wrapper__items">
          <card-template
            class="location-wrapper__card-element"
            v-for="location in locations"
            :key="location.name"
            variant="small"
          >
            <div class="location-heading">
              <h1>
                {{ location.name }}
              </h1>
              <div>
                <a :href="location.link">{{ mapLabel }}</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="w-5 h-5 ml-1 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </div>
            </div>
            <p>{{ location.address }}</p>
          </card-template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  background-position: center !important;
  background-size: cover !important;
  color: $color-secondary-text;
  padding: 0 21%;
  display: flex;
  flex-direction: column;

  &__content-wrapper {
    min-height: 35vh;
    padding: 4rem 1rem;
    max-width: 65ch;
  }

  &__title {
    font-size: 3rem;
    line-height: 1;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
}

.contact-details {
  display: grid;
  grid-template-columns: 8fr 4fr;

  &__form-wrapper {
    display: flex;
    flex-direction: column;
  }
}

.location-wrapper {
  display: flex;
  flex-direction: column;

  &__card-element {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 1rem;

    svg {
      height: 14px;
      width: 14px;
      color: $color-light-gray;
    }
  }

  &__location-label {
    position: relative;
    margin-bottom: 2rem;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 600;
    color: $color-smoke-white;
  }

  &__location-label::after {
    background-color: $color-orange-dark;
    border-radius: 999px;
    height: 0.3rem;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 3rem;
    content: "";
  }
}

.location-heading {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
