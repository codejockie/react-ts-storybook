import { addDecorator } from "@storybook/react";
import { I18nDecorator } from "./I18nDecorator";

addDecorator(I18nDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  locale: "en",
  locales: {
    en: "English",
    // fr: "Français",
    // ja: "日本語",
  },
};
