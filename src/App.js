import React, {useState, useEffect} from 'react';
import {Container, Snackbar} from '@material-ui/core'
import Header from './components/Header';
import SendTweet from './components/SendTweet';
import {TWEETS_STORAGE} from './utils/constants';


function App() {
  
  const [ toastProps, setToastProps] = useState({
    open: false,
    text: null,
    severity: null
  })

  const [ allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(allTweetsStorage);
    setAllTweets(allTweetsArray);
  }, [])

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header/>
      <SendTweet setToastProps={setToastProps}
                  allTweets={allTweets} />

      <Snackbar anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={toastProps.open} 
      autoHideDuration={1000}
      message={<span id='message-id'>{toastProps.text}</span>} 
      severity={toastProps.severity} />
    </Container>
  );
}

export default App;
