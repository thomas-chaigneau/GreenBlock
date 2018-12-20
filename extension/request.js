const serverUrl = 'http://localhost:8000/datawebSite'

chrome.webRequest.onHeadersReceived.addListener((details) => {
  let tableitem = (details.responseHeaders.filter(item => item.name === "content-length"));
  if (tableitem.length > 0) {
    // console.log(tableitem[0].value, typeof tableitem[0].value, typeof parseInt(tableitem[0].value))
    fetch(serverUrl, {
      method: "POST",
      body: parseInt(tableitem[0].value), // only Octel Value
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }).then((response) => {
      console.log(response)
      response.json()
    }, (error) => {
      error.message //=> String
    })
  }


},
{urls: ["<all_urls>"]},["responseHeaders"]);
