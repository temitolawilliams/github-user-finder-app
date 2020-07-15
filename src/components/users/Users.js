import React, { useContext } from 'react';
import UserItem from './Useritem';
import Spinner from '../layout/Spinner';
//import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  /*destructuring loading and users to use githubcontext
  N.B We remove users and loading passed as props earlier in the users fxn param
  */
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

/*Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};*/

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
  paddingTop: 20,
};

export default Users;
