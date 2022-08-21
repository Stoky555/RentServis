export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{props.data ? props.data.AboutUs : "loading..."}</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h2>{props.data ? props.data.ConsHeader : "loading..."}</h2>
              <div className="list-styleCons">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    <li>
                      <b>{props.data ? props.data.Cons1Header : "loading..."}</b> - {props.data ? props.data.Cons1 : "loading..."}
                    </li>
                    <li>
                      {props.data ? props.data.Cons2 : "loading..."}
                    </li>
                    <li>
                      <b>{props.data ? props.data.Cons3Header : "loading..."}</b> - {props.data ? props.data.Cons3 : "loading..."}
                    </li>
                    <li>
                      <b>{props.data ? props.data.Cons4Header : "loading..."}</b> - {props.data ? props.data.Cons4 : "loading..."}
                    </li>
                  </ul>
                </div>
              </div>
              <h2>{props.data ? props.data.WhyHeader : "loading..."}</h2>
              <div className="list-styleWhy">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
