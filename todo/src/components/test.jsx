import axios from 'axios';

// User-initiated cancellation
const cancelTokenSource1 = axios.CancelToken.source();

const request1 = axios.get('https://api.example.com/data', {
  cancelToken: cancelTokenSource1.token
})
.then(response => {
  console.log('Request 1 completed:', response.data);
})
.catch(error => {
  if (axios.isCancel(error)) {
    console.log('Request 1 canceled by the user.');
  } else {
    console.error('Error:', error.message);
  }
});

// Simulate user cancelling request after 2 seconds
setTimeout(() => {
  cancelTokenSource1.cancel('Request 1 canceled by the user.');
}, 2000);





// Optimization: Cancel requests when navigating away from the page
window.addEventListener('beforeunload', () => {
  cancelTokenSource1.cancel('Request 1 canceled because user is navigating away.');
});

// Error handling: Cancel request if it's no longer needed
const cancelTokenSource2 = axios.CancelToken.source();

const request2 = axios.get('https://api.example.com/otherdata', {
  cancelToken: cancelTokenSource2.token
})
.then(response => {
  console.log('Request 2 completed:', response.data);
})
.catch(error => {
  if (axios.isCancel(error)) {
    console.log('Request 2 canceled.');
  } else {
    console.error('Error:', error.message);
  }
});

// Simulate scenario where user moves away from the component before request completes
setTimeout(() => {
  cancelTokenSource2.cancel('Request 2 canceled because user moved away from the component.');
}, 500);

// Resource management: Cancel request if another request is made
const cancelTokenSource3 = axios.CancelToken.source();

const request3 = axios.get('https://api.example.com/anotherdata', {
  cancelToken: cancelTokenSource3.token
})
.then(response => {
  console.log('Request 3 completed:', response.data);
})
.catch(error => {
  if (axios.isCancel(error)) {
    console.log('Request 3 canceled because another request was made.');
  } else {
    console.error('Error:', error.message);
  }
});

// Simulate scenario where another request is made, canceling the third request
setTimeout(() => {
  cancelTokenSource3.cancel('Request 3 canceled because another request was made.');
  axios.get('https://api.example.com/newdata');
}, 1000);
