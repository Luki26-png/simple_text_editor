/*function markUp( markup ) {
    var url = document.querySelector( '#url' ).value;
    document.execCommand( markup, false, url );
  }*/
  document.addEventListener('DOMContentLoaded', function () {
    const boldButton = document.getElementById('boldButton');
    const italicButton = document.getElementById('italicButton');
    const h1Button = document.getElementById('h1Button');
    const h2Button = document.getElementById('h2Button');
    const createLinkButton = document.getElementById('createLinkButton');
    const urlInput = document.getElementById('urlInput');
    const editor = document.getElementById('editor');

    boldButton.addEventListener('click', () => execCommand('bold'));
    italicButton.addEventListener('click', () => execCommand('italic'));
    h1Button.addEventListener('click', () => execCommand('formatBlock', '<h1>'));
    h2Button.addEventListener('click', () => execCommand('formatBlock', '<h2>'));
    createLinkButton.addEventListener('click', () => execCommand('createLink'));

    function execCommand(command, value = null) {
        const url = urlInput.value;
        document.execCommand(command, false, value || url);
    }
});