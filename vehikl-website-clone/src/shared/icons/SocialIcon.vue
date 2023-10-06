<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ variant: string }>()

import FacebookIcon from './FacebookIcon.vue';
import InstagramIcon from './InstagramIcon.vue';
import LinkedinIcon from './LinkedinIcon.vue';
import PodcastIcon from './PodcastIcon.vue';
import TwitterIcon from './TwitterIcon.vue';
import YoutubeIcon from './YoutubeIcon.vue';

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