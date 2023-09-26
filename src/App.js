import {Hero,PopularProduct,CustomerReview,Services,SpecialOffers,Subscribe,Footer,SuperQuality} from './Sections'

import Nav from './Components/Nav'

const App = () => (
  <div className="relative bg-lime-200">
    <Nav/>
    {/* below is a Hero Section */}
    <section className="xl:padding-l wide:padding-r padding-b"><Hero/> </section>
    {/* below is a popular products Section */}
    <section className="padding"><PopularProduct/> </section>
    <section className="padding"><SuperQuality/> </section>
    <section className="padding-x py-10"><Services/> </section>
    <section className="padding"><SpecialOffers/> </section>
    <section className="padding"><CustomerReview/> </section>
    <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/> </section>
    <section className=" bg-black padding-x padding-t pb-8"><Footer/> </section>
  </div>
);

export default App