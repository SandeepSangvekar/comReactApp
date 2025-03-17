import { RightContent } from './RightContent';
import { LeftContent } from './LeftContent';
import expertiseData from '../../../api/home/comp5/projData.json'
export const Comp5 = () => {
    return (
        <>
            <div className="fullWrapper paddingY">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>{expertiseData.title}</h2>
                            <p>{expertiseData.subTitle}</p>
                        </div>
                    </div>

                </div>
                <div className="expertise-sec">
                    {/* <div className="row">

                </div> */}
                {expertiseData.sections.map((item, index)=>(
                    index % 2 === 0 ? (
                        <RightContent key={index} data={item} />
                    ) : (
                        <LeftContent key={index} data={item}/>
                    )
                ))}
                </div>
            </div>
        </>
    )
}