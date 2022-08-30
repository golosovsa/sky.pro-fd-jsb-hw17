document.addEventListener("DOMContentLoaded", () => {

    require.config({ paths: { vs: '../node_modules/monaco-editor/min/vs' } });

    const editorContainer = document.querySelector(".editor__container");

    require(['vs/editor/editor.main'], function () {
    const editor = monaco.editor.create(editorContainer, {
            value: [
                '// grm homework 17 task 1',
                '//',
                '// I choose this code editor because the last update on ',
                '// github was 18 days ago.',
                '// Project has 30.9k github stars, 3k forks and is used by 27.1r users.',
                '// Documentation is very good.',
                '// All code from the examples starts on the first try',
                '//',
                '', 
                'function x() {', '\tconsole.log("Hello world!");', '}'
            ].join('\n'),
            language: 'javascript'
        });
    });

});