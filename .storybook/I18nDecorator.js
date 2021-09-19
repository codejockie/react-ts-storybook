import React from "react";
import { I18nextProvider } from "react-i18next";
import { i18n } from "./i18next";

export const I18nDecorator = storyFn => (
  <I18nextProvider i18n={i18n}>{storyFn()}</I18nextProvider>
);
