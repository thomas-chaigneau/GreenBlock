const serverUrl = 'http://localhost:8000/datawebSite'

chrome.webRequest.onHeadersReceived.addListener((details) => {
  let tableitem = (details.responseHeaders.filter(item => item.name === "content-length"));
  if (tableitem.length > 0) {
    const data = {
      webSite: "find The name of the website",
      Octel: tableitem
  }
    console.log(data)
    fetch(serverUrl, {
      method: "POST",
      body: JSON.stringify(data), // only Octel Value
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
