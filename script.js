function openIframe() {
    const iframeCode = document.getElementById('code').value;
    if (iframeCode.trim() === "") {
        alert('Please enter an iframe code.');
        return;
    }

    const iframeContainer = document.getElementById('iframe-container');
    iframeContainer.innerHTML = iframeCode;

    const iframePopup = document.getElementById('iframe-popup');
    iframePopup.style.display = "block";
}

function closeIframe() {
    const iframePopup = document.getElementById('iframe-popup');
    iframePopup.style.display = "none";
}

function resetIframe() {
    document.getElementById('code').value = "";
    closeIframe();
}
