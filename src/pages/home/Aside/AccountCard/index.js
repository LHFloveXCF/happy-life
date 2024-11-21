
import Card from '@/components/Card';

import IcoBtn from './IcoBtn';
import './index.scss';


function AccountCard() {
  return (
    <Card className={"card"}>
      {accounts.map(({ isLink, link, ico, content }, index) => (
        <IcoBtn isLink={isLink} link={link} content={content} key={index}>
          {ico}
        </IcoBtn>
      ))}
    </Card>
  );
}

export default AccountCard;
