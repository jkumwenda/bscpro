import { Title } from './title';
import { User } from './user';

export class Profile {
  pk_profileid: number;
  user: User;
  title: Title;
  profile_photo: string;
  mobile: string;
}
