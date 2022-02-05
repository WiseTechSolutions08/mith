import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataFilter } from "../../../utils";
import VideoPopup from "../../VideoPopup";
import c1 from '../../../assets/images/video/c1.jpg'
import c2 from '../../../assets/images/video/c2.webp'
import r1 from '../../../assets/images/video/r1.jpg'
import r2 from '../../../assets/images/video/r2.jpg'
import v1 from '../../../assets/images/video/v1.jpg'
import v2 from '../../../assets/images/video/v2.png'
import c5 from '../../../assets/images/video/c5.png'

const Home3Video = () => {
  const [video, setVideo] = useState(false);
  useEffect(() => {
    dataFilter();
  });
  return (
    <section className="section-padding isotope-filter-items">
      {video && (
        <VideoPopup close={() => setVideo(false)} videoID="TKnufs85hXk" />
      )}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title wow fadeInDown">
              <p className="subtitle">
                <i className="fal fa-book" />
                Latest video gallery
              </p>
              <h3 className="title">
                We Provide Life-Changing Video Tutorials
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="filter-btns mb-5">
              <ul>
                <li className={`filter-trigger active`} data-filter=".all">
                  <Link to="#">All</Link>
                </li>
                <li className={`filter-trigger`} data-filter=".lifestyle">
                  <Link to="#">Aptitude</Link>
                </li>
                <li className={`filter-trigger`} data-filter=".goals">
                  <Link to="#">Reasoning</Link>
                </li>
                <li className={`filter-trigger`} data-filter=".fashion">
                  <Link to="#">Verbal</Link>
                </li>
                {/* <li className={`filter-trigger`} data-filter=".health">
                  <a href="#">Health</a>
                </li>
                <li className={`filter-trigger`} data-filter=".business">
                  <a href="#">Business</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="row filteritems">
          {/* Box Start */}
          <div className="col-lg-4 col-md-6 masonry-item all lifestyle fashion business">
            <div className="video_box wow fadeInDown" data-wow-delay=".1s">
              <img
                src={c1}
                alt="img"
                className="image-fit"
              />
              <div className="video_badges">
                <span className="tag_badge bg-thm-color-four">Free</span>
              </div>
              <div
                onClick={() => setVideo(true)}
                className="popup-youtube video_btn"
              >
                <i className="fas fa-play" />
              </div>
              <div className="video_text">
                <h6 className="text-white mb-0">Time and Work</h6>
                <p className="mb-0 thm-color-light">By Frank L. Pierce</p>
              </div>
            </div>
          </div>
          {/* Box End */}
          {/* Box Start */}
          <div className="col-lg-4 col-md-6 masonry-item all goals health lifestyle">
            <div className="video_box wow fadeInUp" data-wow-delay=".2s">
              <img
                src={c2}
                alt="img"
                className="image-fit"
              />
              <div className="video_badges">
                <span className="tag_badge bg-thm-color-four">$59</span>
              </div>
              <div
                onClick={() => setVideo(true)}
                className="popup-youtube video_btn"
              >
                <i className="fas fa-play" />
              </div>
              <div className="video_text">
                <h6 className="text-white mb-0">
                  Percentage
                </h6>
                <p className="mb-0 thm-color-light">By Janine T. Hostetter</p>
              </div>
            </div>
          </div>
          {/* Box End */}
          {/* Box Start */}
          <div className="col-lg-4 col-md-6 masonry-item all fashion business goals">
            <div className="video_box wow fadeInDown" data-wow-delay=".3s">
              <img
                src={r1}
                alt="img"
                className="image-fit"
              />
              <div className="video_badges">
                <span className="tag_badge bg-thm-color-four">$59</span>
              </div>
              <div
                onClick={() => setVideo(true)}
                className="popup-youtube video_btn"
              >
                <i className="fas fa-play" />
              </div>
              <div className="video_text">
                <h6 className="text-white mb-0">Analogies</h6>
                <p className="mb-0 thm-color-light">By Joan J. Young</p>
              </div>
            </div>
          </div>
          {/* Box End */}
        </div>
        <div className="row filteritems">
          {/* Box Start */}
          <div className="col-xl-3 col-lg-4 col-md-6 masonry-item all health lifestyle fashion">
            <div className="video_box wow fadeInUp" data-wow-delay=".4s">
              <img
                src={r2}
                alt="img"
                className="image-fit"
              />
              <div className="video_badges">
                <span className="tag_badge bg-thm-color-four">Free</span>
              </div>
              <div
                onClick={() => setVideo(true)}
                className="popup-youtube video_btn"
              >
                <i className="fas fa-play" />
              </div>
              <div className="video_text">
                <h6 className="text-white mb-0">Blood Realtion</h6>
                <p className="mb-0 thm-color-light">By Frank L. Pierce</p>
              </div>
            </div>
          </div>
          {/* Box End */}
          {/* Box Start */}
          <div className="col-xl-3 col-lg-4 col-md-6 masonry-item all business goals health">
            <div className="video_box wow fadeInDown" data-wow-delay=".5s">
              <img
                src={v1}
                alt="img"
                className="image-fit"
              />
              <div className="video_badges">
                <span className="tag_badge bg-thm-color-four">$59</span>
              </div>
              <div
                onClick={() => setVideo(true)}
                className="popup-youtube video_btn"
              >
                <i className="fas fa-play" />
              </div>
              <div className="video_text">
                <h6 className="text-white mb-0">Clonze Test</h6>
                <p className="mb-0 thm-color-light">By Janine T. Hostetter</p>
              </div>
            </div>
          </div>
          {/* Box End */}
          {/* Box Start */}
          <div className="col-xl-3 col-lg-4 col-md-6 masonry-item all lifestyle fashion business">
            <div className="video_box wow fadeInUp" data-wow-delay=".6s">
              <img
                src={v2}
                alt="img"
                className="image-fit"
              />
              <div className="video_badges">
                <span className="tag_badge bg-thm-color-four">Free</span>
              </div>
              <div
                onClick={() => setVideo(true)}
                className="popup-youtube video_btn"
              >
                <i className="fas fa-play" />
              </div>
              <div className="video_text">
                <h6 className="text-white mb-0">Spot the Error</h6>
                <p className="mb-0 thm-color-light">By Frank L. Pierce</p>
              </div>
            </div>
          </div>
          {/* Box End */}
          {/* Box Start */}
          <div className="col-xl-3 col-lg-4 col-md-6 masonry-item all goals health lifestyle">
            <div className="video_box wow fadeInDown" data-wow-delay=".7s">
              <img
                src={c5}
                alt="img"
                className="image-fit"
              />
              <div className="video_badges">
                <span className="tag_badge bg-thm-color-four">$59</span>
              </div>
              <div
                onClick={() => setVideo(true)}
                className="popup-youtube video_btn"
              >
                <i className="fas fa-play" />
              </div>
              <div className="video_text">
                <h6 className="text-white mb-0">Simple Interest</h6>
                <p className="mb-0 thm-color-light">By Janine T. Hostetter</p>
              </div>
            </div>
          </div>
          {/* Box End */}
        </div>
      </div>
    </section>
  );
};

export default Home3Video;
