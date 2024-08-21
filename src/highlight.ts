import { styleTags, tags as t } from "@lezer/highlight";
import { HighlightStyle } from "@codemirror/language";

export const hyplHighlight = styleTags({
  LParen: t.paren,
  RParen: t.paren,
  Arrow: t.operator,
  varid: t.variableName,
  popid: t.keyword,
});

export const hyplHighlightStyle = HighlightStyle.define([
  { tag: t.paren, color: "#0000FF" },
  { tag: t.operator, color: "#00FF00" },
  { tag: t.variableName, color: "#FF0000" },
  { tag: t.keyword, color: "#FFA500" },
]);

export const hyplHighlightExtension = [hyplHighlight, hyplHighlightStyle];