const serverUrl = 'http://localhost:8000/datawebSite'

chrome.webRequest.onHeadersReceived.addListener((detail) => {
  let tableOfOctel = detail.responseHeaders.filter(item => item.name === "content-length");
  const withWeb = [];
  if (tableOfOctel.length === 1) {
    withWeb.push(tableOfOctel[0].value, detail.initiator)
    console.log(withWeb)


    const data = {
      webSite: withWeb[1],
      Octel: withWeb[0]
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
      // console.log(response)
      response.json()
    }, (error) => {
      error.message
    })
  }
},
{urls: ["<all_urls>"]},["responseHeaders"]);
