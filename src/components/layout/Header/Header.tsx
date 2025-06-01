import { Button } from 'antd';
import { StyledHeader } from './styled';
import { useNavigate } from 'react-router';
import X from 'store/store';
import { observer } from 'mobx-react-lite';

function Header() {
  const navigate = useNavigate();

  const onClick = () => {
    X.logout();
    navigate('/');
  };

  return (
    <StyledHeader>
      {X.currentUser && (
        <>
          <span>
            {X.currentUser.first_name} {X.currentUser.last_name}
          </span>
          <Button onClick={onClick}>Выйти</Button>
        </>
      )}
    </StyledHeader>
  );
}

const ObservedHeader = observer(Header);

export { ObservedHeader as Header };
