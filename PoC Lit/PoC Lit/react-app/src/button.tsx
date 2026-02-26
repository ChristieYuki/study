import React from "react";
import {createComponent} from '@lit/react';
import { CustomButton as ButtonElement } from "lit-button";

export const Button = createComponent({
  react: React,
  tagName: "custom-button",
  elementClass: ButtonElement,
  events: {
    onAction: "onAction",
  },
});