import { use, useContext } from "react";
import Menu from "../Menu/Menu";
import { UserContext } from "../../context/UserContext";

export default function Section() {
    const user = useContext(UserContext);

    return (
        <>
            <div>
                <h3>{user.firstName} ({user.age})</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias assumenda quo ipsum ipsa quaerat officia dolorem eaque? Non sunt, repudiandae atque vitae itaque distinctio aliquam a, nobis accusantium quis pariatur.
                </p>
                <Menu />
            </div>
        </>
    )
}
