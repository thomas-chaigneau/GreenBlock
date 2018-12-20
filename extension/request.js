const serverUrl = 'http://localhost:8000/datawebSite'

chrome.webRequest.onHeadersReceived.addListener((detail) => {
  let tableOfOctel = detail.responseHeaders.filter(item => item.name === "content-length");
  const requestInfo = [];
  if (tableOfOctel.length === 1) {
    requestInfo.push(detail.initiator || 'Site Inconu', tableOfOctel[0].value)

    const data = {
      webSiteName: requestInfo[0],
      Octel: requestInfo[1]
  }
  // console.log(data)

    fetch(serverUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }).then((res) => {
      res.json()
    }, (error) => {
      error.message
    })
  }
},
{urls: ["<all_urls>"]},["responseHeaders"]);
