import { minimalSetup, EditorView } from 'codemirror'
import { parser } from "./syntax.grammar"
import { LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent } from "@codemirror/language"

export const HyplLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            indentNodeProp.add({
                Application: delimitedIndent({ closing: ")", align: false }),
            }),
            foldNodeProp.add({
                Application: foldInside,
            }),
        ],
    }),
    languageData: {
        commentTokens: { line: ";" },
    },
});

export const test = "TESTING";

export function Hypl() {
    return new LanguageSupport(HyplLanguage);
}

const initialText = '(popid) Varid <- Varid';
const targetElement = document.querySelector('#editor')!;

new EditorView({
    doc: initialText,
    extensions: [
        minimalSetup,
        Hypl(),
    ],
    parent: targetElement,
});
