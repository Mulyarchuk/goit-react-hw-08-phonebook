import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import authOperations from '../../redux/auth/auth-operations';
import {UserName, ExitButton, Box} from "./UserMenu.styled";


export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    return(
        <Box>
            <UserName>Hello, {name}</UserName>
            <ExitButton type="button" onClick={() => dispatch(authOperations.logOut())}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M11.2788 13.0708H12.6844V15.8818C12.6844 17.0443 11.7386 17.99 10.5761 17.99H2.10814C0.945786 17.99 0 17.0443 0 15.8818V2.10814C0 0.945786 0.945786 0 2.10814 0H10.5761C11.7386 0 12.6844 0.945786 12.6844 2.10814V4.91913H11.2788V2.10814C11.2788 1.72073 10.9637 1.40543 10.5761 1.40543H2.10814C1.72073 1.40543 1.40543 1.72073 1.40543 2.10814V15.8818C1.40543 16.2692 1.72073 16.5845 2.10814 16.5845H10.5761C10.9637 16.5845 11.2788 16.2692 11.2788 15.8818V13.0708ZM14.6872 5.68213L13.6934 6.67598L15.3096 8.29234H6.21922V9.69777H15.3096L13.6934 11.314L14.6872 12.3078L18 8.99506L14.6872 5.68213Z"></path>
            </svg>
            </ExitButton>
        </Box>
    )
}