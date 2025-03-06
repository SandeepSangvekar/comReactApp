import { Comp1 } from "./Comp1";
import { CardComp } from "./cardComp/CardComp";
import './SuccessStories.css';
export const SuccessStories = () => {
    return (
        <>
            <div className="successStories">
                <Comp1 />
                <CardComp />
            </div>

        </>
    )
}