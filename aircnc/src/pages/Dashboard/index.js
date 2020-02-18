import React from 'react';
import PropTypes from 'prop-types';
import { useAuthentication } from '~/components/AuthProvider';

// import { Container } from './styles';

const Dashboard = ({ history }) => {
  const auth = useAuthentication();

  if (!auth.user) {
    history.push('/');
  }

  return <h1>{auth.user ? auth.user.name : '<Não Informado>'}</h1>;
};

Dashboard.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Dashboard;
