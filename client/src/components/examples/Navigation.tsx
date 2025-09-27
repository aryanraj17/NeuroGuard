import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <Navigation 
      onLoginClick={() => console.log('Login clicked')}
      onRegisterClick={() => console.log('Register clicked')}
    />
  );
}