// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({color: '#3aa757'}, function() {
//     console.log('The color is green.');
//   });
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [new chrome.declarativeContent.PageStateMatcher({
//         pageUrl: {hostEquals: 'developer.chrome.com'},
//       })
//       ],
//           actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });
// });

chrome.webRequest.onHeadersReceived.addListener(function(details){
  let tableitem = ('fff', details.responseHeaders.filter(item => item.name === "content-length"));

  if (tableitem.length > 0) {
    fetch('url')
    methode:"POST"

  }


},
{urls: ["<all_urls>"]},["responseHeaders"]);


// chrome.webRequest.onHeadersReceived.addListener(
//   function(details){
//       var fileSize;
//       details.responseHeaders.forEach(function(v,i,a){
//           if(v.name == 'Content-Length')
//               fileSize = v.value;
//       });
//       if(!fileSize)//if Content-Length header is missing fall back to another method of calculating file size
//           fallBackGetFileSize(details);
//   },
//   {urls: ["<all_urls>"]},["responseHeaders"]);



// console.log('toto')



// /**
//  * Implementation example of writable response bodies.
//  * Based on the draft of the Streams API (19 March 2014)
//  *   https://dvcs.w3.org/hg/streams-api/raw-file/tip/Overview.htm
//  * Design document for response body reading/writing:
//  *   https://docs.google.com/document/d/1iE6M-YSmPtMOsec7pR-ILWveQie8JQQXTm15JKEcUT8
//  */
// /* globals chrome, ByteStream, URL, XMLHttpRequest */
// 'use strict';

// // The extension will create a writable stream and store it in this dict
// // until the response body is available.
// var outStreams = {};

// // Capture all response bodies.
// chrome.webRequest.onHeadersReceived.addListener(function(details) {
//     var mimeType = extractMimeTypeFromHeaders(details.responseHeaders);
//     var newStream = new ByteStream(mimeType);
//     // Remember stream for later
//     outStreams[details.requestId] = newStream;

//     return {
//         captureStream: true,
//         redirectUrl: URL.createObjectURL(newStream)
//     };
// }, {
//     types: ['main_frame', 'sub_frame', 'xmlhttprequest'],
//     urls: ['*://*/*']
// }, ['blocking', 'responseHeaders']);

// // Handle receipt of the stream data
// chrome.webRequest.onResponseStarted.addListener(function(details) {
//     // Move stream from dict to local variable
//     var outStream = outStreams[details.requestId];
//     delete outStreams[details.requestId];
//     var inStreamUrl = details.streamUrl;

//     if (!inStreamUrl || !outStream) {
//         // Either of the required parameters are missing, clean up and exit.
//         if (inStreamUrl)
//             URL.revokeObjectURL(inStreamUrl);
//         if (outStream)
//             outStream.writeAbort();
//         return;
//     }

//     // Get the stream of the response body
//     var stream;
//     var x = new XMLHttpRequest();
//     x.open('get', inStreamUrl);
//     x.responseType = 'stream';
//     x.onload = function() {
//         // Get stream of response body as text.
//         stream = x.response;
//         stream.readBytesAs = 'text';
//         collectAndWrite();
//     };
//     x.onerror = handleFailure;
//     x.send();

//     // Method to drain the input stream (received response body) and write to
//     // the output stream (response body passed passed back to the browser)
//     function collectAndWrite() {
//         outStream.awaitSpaceAvailable().then(function() {
//             stream.read().then(function(result) {
//                 if (result.eof) {
//                     outStream.writeClose();
//                 } else {
//                     var data = result.data;
//                     // Do something with data... e.g. convert to uppercase.
//                     data = data.toUpperCase();
//                     outStream.write(data).then(collectAndWrite, handleFailure);
//                 }
//             }, handleFailure);
//         }, handleFailure);
//     }
//     // Catch-all for errors.
//     function handleFailure() {
//         if (stream) stream.readAbort();
//         outStream.writeAbort();
//     }
// }, {
//     types: ['main_frame', 'sub_frame', 'xmlhttprequest'],
//     urls: ['*://*/*']
// });

// // Handle network errors
// chrome.webRequest.onErrorOccurred.addListener(function(details) {
//     var outStream = outStreams[details.requestId];
//     if (outStream) {
//         delete outStreams[details.requestId];
//         outStream.writeAbort();
//     }
// });

// function extractMimeTypeFromHeaders(headers) {
//     for (var i = 0; i < headers.length; ++i) {
//         var header = headers[i];
//         if (header.name.toLowerCase() === 'content-type') {
//             return header.value.split(';')[0];
//         }
//     }
//     return 'text/plain';
// }
