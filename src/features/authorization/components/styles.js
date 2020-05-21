export default {
  wrapper: {
    margin: "0 auto",
    backgroundColor: "white"
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px'
  },
  credentialsWrapper: {
    marginBottom: '20px'
  },
  greetingsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#263238',
    textTransform: 'uppercase',

    '& h1': {
      color: 'white'
    }
  },
  loadingOverlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0, 0.2)',
    zIndex: '1000'
  }
};
