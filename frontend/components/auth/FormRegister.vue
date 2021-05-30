<template>
  <base-card
    :disabled="!valid"
    :title="$t('user.register')"
    :agree-text="$t('user.register')"
    @agree="tryRegister"
  >
    <template #content>
      <v-form v-model="valid">
        <v-alert
          v-show="showError"
          v-model="showError"
          type="error"
          dismissible
        >
          {{ $t("errors.invalidUserOrPass") }}
        </v-alert>
        <v-text-field
          v-model="username"
          :rules="userNameRules($t('rules.userNameRules'))"
          :label="$t('user.username')"
          name="username"
          prepend-icon="person"
          type="text"
          autofocus
          @keyup.enter="tryRegister"
        />
        <v-text-field
          id="password"
          v-model="password1"
          :rules="passwordRules($t('rules.passwordRules'))"
          :label="$t('user.password')"
          name="password"
          prepend-icon="lock"
          type="password"
          @keyup.enter="tryRegister"
        />
        <v-text-field
          id="password2"
          v-model="password2"
          :rules="passwordRules($t('rules.passwordRules'))"
          :label="$t('user.password')"
          name="password2"
          prepend-icon="lock"
          type="password"
          @keyup.enter="tryRegister"
        />
        <v-text-field
          v-model="email"
          :label="$t('user.email')"
          name="email"
          prepend-icon="email"
          type="email"
          @keyup.enter="tryRegister"
        />
      </v-form>
    </template>
  </base-card>
</template>

<script lang="ts">
import Vue from "vue";
import { userNameRules, passwordRules } from "@/rules/index";
import BaseCard from "@/components/utils/BaseCard.vue";

export default Vue.extend({
  components: {
    BaseCard,
  },

  props: {
    register: {
      type: Function,
      default: (
        username: string,
        password1: string,
        password2: string,
        email: string,
      ) => Promise,
    },
  },
  data() {
    return {
      valid: false,
      username: "",
      password1: "",
      password2: "",
      email: "",
      userNameRules,
      passwordRules,
      showError: false,
    };
  },

  methods: {
    async tryRegister() {
      try {
        await this.register({
          username: this.username,
          password1: this.password1,
          password2: this.password2,
          email: this.email,
        });
      } catch {
        this.showError = true;
      }
    },
  },
});
</script>
