import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';
import { BackToSignIn, BackToSignInText } from '../SignUp/styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <BackToSignIn onPress={signOut}>
        <BackToSignInText>Voltar para login</BackToSignInText>
      </BackToSignIn>
    </View>
  );
};

export default Dashboard;
