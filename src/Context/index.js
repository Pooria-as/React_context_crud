import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";
import { USERS_DATA } from "../common/Urls";
const Context = React.createContext();

class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      loading: false,
      CurrentPage: 1,
      UserPerPage: 3,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const fetchData = await axios.get(USERS_DATA);
    this.setState({ Users: fetchData.data });
    this.setState({ loading: false });
  }

  DeleteUserHandler = (id) => {
    const users = [...this.state.Users];
    const deletedUser = users.filter((user) => user.id !== id);
    this.setState({ Users: deletedUser });
    toast("deleted success");
  };
  Paginate =(number)=>
  {
    
    this.setState({CurrentPage:number})
  }

  render() {
    const indexOfLastUser = this.state.CurrentPage * this.state.UserPerPage;
    const indexOfFitstUser = indexOfLastUser - this.state.UserPerPage;
    const currentUser = this.state.Users.slice(
      indexOfFitstUser,
      indexOfLastUser
    );

    return (
      <Context.Provider
        value={{
          users: currentUser,
          userPerPage :this.state.UserPerPage,
          paginate:this.Paginate,
          totalUser:this.state.Users.length,
          CurrentPage:this.state.CurrentPage,
          loading: this.state.loading,
          onDelete: this.DeleteUserHandler,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { MyProvider, Context };
