import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

const iconCss = `absolute top-2 border-r border-black peer-focus:text-violet-700`;
const inputLoginArr = [{
    "type": "email",
   "id": "username",
    "name": "username",
    "required": true,
    "value" : "positive.mind.123456789@gmail.com",
    "placeholder": "Enter your Email",
    "icon": <PersonIcon className={iconCss} />
  }, {
    "type": "password",
   "id": "password",
    "name": "password",
    "required": true,
    "value" : "1234",
    "placeholder": "Enter Your Password",
    "icon": <LockIcon className={iconCss} />
  }]

  export default inputLoginArr;