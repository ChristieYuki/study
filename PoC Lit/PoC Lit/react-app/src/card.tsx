import React from "react";
import {createComponent} from '@lit/react';
import { CustomCard as CardElement } from "lit-card";

export const Card = createComponent({
  react: React,
  tagName: "custom-card",
  elementClass: CardElement,
});