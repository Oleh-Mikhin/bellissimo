document.querySelector('.get-html-ajax')
    .addEventListener('click', getHtmlAjax);



const READY_STATE_FINISHED = 4;
const HTTP_STATUS_CODE_OK = 200;


function getHtmlAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === READY_STATE_FINISHED &&
            xhr.status == HTTP_STATUS_CODE_OK) {
            document.querySelector('.html-placeholder')
                .innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();

}
