import "./cards/cards.css"
import BeigeCard from "./BeigeCard"
import BlueCard from "./BlueCard"
import Paragraph from "./paragraph"
import RedCard from "./RedCard"

const Section3Cols = () => {
    return <section class="section section-content-center">
        <Paragraph />
        <div class="section-3cols">
            <RedCard />
            <BlueCard />
            <BeigeCard/>
        </div>
    </section>
}

export default Section3Cols;