/*function markUp( markup ) {
    var url = document.querySelector( '#url' ).value;
    document.execCommand( markup, false, url );
  }*/
  document.addEventListener('DOMContentLoaded', function () {
    const boldButton = document.getElementById('boldButton');
    const italicButton = document.getElementById('italicButton');
    const underlineButton = document.getElementById('underlineButton');
    const h1Button = document.getElementById('h1Button');
    const h2Button = document.getElementById('h2Button');
    const h3Button = document.getElementById('h3Button');
    const h4Button = document.getElementById('h4Button');
    const createLinkButton = document.getElementById('createLinkButton');
    const urlInput = document.getElementById('urlInput');
    const editor = document.getElementById('editor');

    boldButton.addEventListener('click', () => execCommand('bold'));
    italicButton.addEventListener('click', () => execCommand('italic'));
    underlineButton.addEventListener('click', () => execCommand('underline'));
    h1Button.addEventListener('click', () => execCommand('formatBlock', '<h1>'));
    h2Button.addEventListener('click', () => execCommand('formatBlock', '<h2>'));
    h3Button.addEventListener('click', () => execCommand('formatBlock', '<h3>'));
    h4Button.addEventListener('click', () => execCommand('formatBlock', '<h4>'));
    createLinkButton.addEventListener('click', () => execCommand('createLink'));

    function execCommand(command, value = null) {
        const url = urlInput.value;
        document.execCommand(command, false, value || url);
    }
});