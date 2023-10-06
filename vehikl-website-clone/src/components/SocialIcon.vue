<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ variant: string }>()

import FacebookIcon from '../shared/icons/FacebookIcon.vue';
import InstagramIcon from '../shared/icons/InstagramIcon.vue';
import LinkedinIcon from '../shared/icons/LinkedinIcon.vue';
import PodcastIcon from '../shared/icons/PodcastIcon.vue';
import TwitterIcon from '../shared/icons/TwitterIcon.vue';
import YoutubeIcon from '../shared/icons/YoutubeIcon.vue';

</script>

<template>
    <FacebookIcon v-if="variant === 'facebook'" />
    <InstagramIcon v-else-if="variant === 'instagram'" />
    <LinkedinIcon v-else-if="variant === 'linkedin'" />
    <PodcastIcon v-else-if="variant === 'podcast'" />
    <TwitterIcon v-else-if="variant === 'twitter'" />
    <YoutubeIcon v-else-if="variant === 'youtube'" />
</template>

<style></style>