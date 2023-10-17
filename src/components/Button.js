import { useState }  from 'react';
import { Button as SemanticButton, Icon, Label } from 'semantic-ui-react';

const Button = (props)=> {
  const {children} = props;
return (
  <div>
  <SemanticButton {...props}>
 {children}
  </SemanticButton>
</div>)
}

const DeleteButton = (props)=> {
  return(
  <Button {...props} icon= 'trash'/>)
}

const AddButton = (props)=> {
  return(
  <Button {...props} icon= 'plus'/>)
}

const SignInButton = (props)=> {
  return (
    <Button {...props} color='green'>
      <Icon name='sign-in'/> {props.children}
    </Button>
  )
}

Button.Add = AddButton;
Button.Delete = DeleteButton;
Button.Signin = SignInButton;

export default Button;