import s1 from '../../../assets/images/sponsors/s1.png'
import s2 from '../../../assets/images/sponsors/s2.png'
import s3 from '../../../assets/images/sponsors/s3.png'
import s4 from '../../../assets/images/sponsors/s4.png'
import s5 from '../../../assets/images/sponsors/s5.png'

const Home3Sponsors = () => {
  return (
    <div className="section-padding pt-0">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-auto">
            <div className="sponsors_img">
              <img src={s1} alt="img" />
            </div>
          </div>
          <div className="col-auto">
            <div className="sponsors_img">
              <img src={s2} alt="img" />
            </div>
          </div>
          <div className="col-auto">
            <div className="sponsors_img">
              <img src={s3} alt="img" />
            </div>
          </div>
          <div className="col-auto">
            <div className="sponsors_img">
              <img src={s4} alt="img" />
            </div>
          </div>
          <div className="col-auto">
            <div className="sponsors_img">
              <img src={s5} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3Sponsors;
