<template>
  <section>
    <v-parallax
      :src="require(`~/assets/vbanner.jpg`)"
      height="400"
      dark
    >
      <v-layout
        wrap
        align-center
        justify-center
        class="white--text"
      >
        <v-flex>
          <h1 class="mb-2 display-1 text-center">
            {{ $t('home.mainTitle') }}
          </h1>
          <div class="mt-4 text-center">
            <v-btn
              large
              outlined
              color="white"
              href="https://github.com/gasci/doccano-dash"
              target="_blank"
            >
              <v-icon left>
                mdi-github
              </v-icon>
              GitHub
            </v-btn>
            <v-btn
              class="blue lighten-2 ml-5"
              dark
              large
              :href="localePath('/auth')"
            >
              {{ $t('home.getStarted') }}
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-parallax>
  </section>
</template>
