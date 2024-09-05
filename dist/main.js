import { EditorView, minimalSetup } from 'codemirror';
import { LRParser } from '@lezer/lr';
import { HighlightStyle, LRLanguage, indentNodeProp, delimitedIndent, foldNodeProp, foldInside, LanguageSupport, syntaxHighlighting } from '@codemirror/language';
import { styleTags, tags } from '@lezer/highlight';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser = LRParser.deserialize({
  version: 14,
  states: "!WQQOPOOO]OPO'#C`OOOO'#Cc'#CcOOOO'#Ca'#CaQQOPOOOOOO,58z,58zOkOPO,58zOOOO-E6_-E6_OOOO1G.f1G.f",
  stateData: "y~OQQORQOXPO~OQQORQOWTOXPO~OQQORQOWWOXPO~O",
  goto: "oWPPPPX_PiXQOPSUQSOQUPTVSUXROPSU",
  nodeNames: "⚠ Program Identifier Name Application",
  maxTerm: 9,
  skippedNodes: [0],
  repeatNodeCount: 1,
  tokenData: "!]~RSxy_yzd!c!}i#T#oz~dOX~~iOW~~nSR~!Q![i!c!}i#R#Si#T#oi~!PSQ~!Q![z!c!}z#R#Sz#T#oz",
  tokenizers: [0],
  topRules: {"Program":[0,1]},
  tokenPrec: 0
});

const hyplHighlight = styleTags({
    Identifier: tags.variableName,
    Name: tags.name,
    "( )": tags.paren
});
const hyplHighlightStyle = HighlightStyle.define([
    { tag: tags.variableName, color: "#2689C7" },
    { tag: tags.name, color: "#0909AD" },
]);

const HyplLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            indentNodeProp.add({
                Application: delimitedIndent({ closing: ")", align: false }),
            }),
            foldNodeProp.add({
                Application: foldInside,
            }),
            hyplHighlight,
        ],
    }),
    languageData: {
        commentTokens: { line: ";" },
    },
});
function Hypl() {
    return new LanguageSupport(HyplLanguage, syntaxHighlighting(hyplHighlightStyle));
}
const initialText = '(popid) Varid <- Varid';
const targetElement = document.querySelector('#editor');
new EditorView({
    doc: initialText,
    extensions: [
        minimalSetup,
        Hypl(),
    ],
    parent: targetElement,
});

export { Hypl, HyplLanguage };