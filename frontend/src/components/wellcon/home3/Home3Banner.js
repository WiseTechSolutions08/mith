import { Link } from "react-router-dom";
import { useState } from "react";
import VideoPopup from "../../VideoPopup";
import element from '../../../assets/images/banner/element.png'
import elementLine1 from '../../../assets/images/banner/element_line_1.png'
import b3c from '../../../assets/images/banner/b3c.png'

const Home3Banner = () => {
  const [video, setVideo] = useState(false);

  return (
    <div
      className="banner relative z-1"
      style={{ zIndex: video ? "999" : "1" }}
    >
      {video && (
        <VideoPopup close={() => setVideo(false)} videoID="TKnufs85hXk" />
      )}
      <img
        src={element}
        className="element_1"
        alt="Element"
      />
      <img
        src={elementLine1}
        className="element_line"
        alt="Element Line"
      />
      {/* Texts */}
      <div className="transform-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text_box">
                <h1 className="title wow fadeInUp" data-wow-delay=".30ms">
                  <span>Modern Life</span> Coach School Podcast
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".40ms">
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accan tium doloremque laudantium totam rem aperiam
                </p>
                <Link to="/about-2"
                  className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rounded mr-4 mb-4 wow fadeInRight"
                  data-wow-delay=".50ms"
                >
                  Get Coach <i className="fal fa-chevron-right ml-2" />

                </Link>
                <div
                  onClick={() => setVideo(true)}
                  className="video_btn video_text popup-youtube mb-4  wow fadeInRight"
                  data-wow-delay=".70ms"
                >
                  <i className="fas fa-play video_icon bg-thm-color-three watch-video-icon" />
                  Watch Videos
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="image_box relative wow fadeInRight"
                data-wow-delay=".80ms"
              >
                <img
                  src={b3c}
                  alt="img"
                  className="image-fit"
                />
                {/* <span className="bg-thm-color-three circle_element" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Line */}
      <div className="bottom-line container" />
    </div>
  );
};

export default Home3Banner;
