export default {
  '@global': {
    body: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      color: '#263238',
      margin: '0'
    },
    img: {
      display: 'block',
      width: '100%'
    }
  },
  container: {
    backgroundColor: "#f7f7f7"
  },
  pageWrapper: {
    paddingTop: '120px',
    minWidth: '450px',
    maxWidth: '700px',
    minHeight: 'calc(100vh - 270px)',
    margin: "0 auto"
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    height: '60px',
    padding: '20px 0',

    backgroundColor: 'white',
  },
  logo: {
    margin: '0',
    color: '#455a64'
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: '0 50px',
    height: '150px',
    backgroundColor: '#263238',
    color: 'white',
    '& $logo': {
      color: 'white'
    }
  }
};
