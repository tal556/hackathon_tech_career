import React, { useEffect } from 'react';
import NavBar from "./components/navBar/NavBar";
import "./App.css";
import Footer from "./components/footer/Footer";
import AdminRouter from "./AdminRouter";
import usersActions from './redux/actions/user.actions';
import { connect } from 'react-redux';
import service from './utils';



const { setUserData } = usersActions.usersActions;
const mapDispatchToProps = (dispatch: any) => ({
  setUserData: (data: Object) => { dispatch(setUserData(data)) }
})
const mapStateToProps = (state: any) => { return { userData: state.user.userData } }


function App(props: any) {
  const { setUserData, userData } = props
  const { login } = service
  const { getUserUseToken } = login
  const token = login.getToken();
  useEffect(() => {
    const loginHandler = async () => {

      if (token) {
        const userFromToken = await getUserUseToken(token)
        if (userFromToken.success) {
          login.setTokenLocal(token)
          await setUserData(userFromToken)
        }
      }
    }

    loginHandler()
  }, [getUserUseToken, login, setUserData]);



  if (!userData.email) {
    return (
      <div className={'App'}>
        <NavBar />
        <AdminRouter />
        <Footer />
      </div>
    );
  }
  return (
    <div className={'App'}>
    <NavBar />
    <AdminRouter />
    <Footer />
  </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


// function App(props: any) {
//   return (<>
//     <NavBar />
//     <AdminRouter />
//     <Footer />
//   </>
//   );
// }

// export default App;
