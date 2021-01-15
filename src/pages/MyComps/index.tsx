import React, { useEffect } from 'react';

import useTeam from '../../context/TeamContext';
import useAuth from '../../context/AuthContext';

import { Container } from './styles';

const MyComps: React.FC = () => {
  const { currentUser, fetchTeamsOfCurrentUser } = useAuth();

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchTeamsOfCurrentUser();

      console.log(data);
    }

    fetch();
  }, [fetchTeamsOfCurrentUser]);

  return (
    <Container>

    </Container>
  );
}

export default MyComps;