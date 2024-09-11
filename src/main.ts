import { minimalSetup, EditorView } from 'codemirror'
import { parser } from "./syntax.grammar"
import { LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent, syntaxHighlighting } from "@codemirror/language"
import { hyplHighlight, hyplHighlightStyle } from './highlight';

export const HyplLanguage = LRLanguage.define({
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

export function Hypl() {
    return new LanguageSupport(HyplLanguage, syntaxHighlighting(hyplHighlightStyle));
}

const initialText = '(popid) Varid <- Varid';
const targetElements = document.querySelector('.hypl')!;

new EditorView({
    doc: initialText,
    extensions: [
        minimalSetup,
        Hypl(),
    ],
    parent: targetElements,
});
