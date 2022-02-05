import { Link } from "react-router-dom";
import element19 from '../assets/images/elements/element_19.png'
import element10 from '../assets/images/elements/element10.png'
import element20 from '../assets/images/elements/element_20.png'
import element21 from '../assets/images/elements/element_21.png'
import bannerAppi from '../assets/images/banner-appi.png'

const PageTitleBanner = ({ pageName, title }) => {
  return (
    <div
      className="subheader relative z-1"
      style={{ backgroundImage: "url(" +bannerAppi +")" }}
    >
      <div className="container relative z-1">
        <div className="row">
          <div className="col-12">
            <h1 className="page_title">{title ? title : pageName}</h1>
            <div className="page_breadcrumb">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageName}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitleBanner;
