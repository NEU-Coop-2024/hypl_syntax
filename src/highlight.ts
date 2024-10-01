import { styleTags, tags as t } from "@lezer/highlight";
import { HighlightStyle } from "@codemirror/language";

export const hyplHighlight = styleTags({
  Identifier: t.variableName,
  Name: t.name,
  "( )": t.paren,
  NewExpression: t.modifier
});

export const hyplHighlightStyle = HighlightStyle.define([
  { tag: t.variableName, color: "#2689C7" },
  { tag: t.name, color: "#d90cfe" },
  { tag: t.modifier, color: "#91041e" },
]);

export const hyplHighlightExtension = [hyplHighlight, hyplHighlightStyle];