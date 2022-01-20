import React from "react";

function Resources({ resources }) {
  return (
    <div className="my-3">
      <h5 className="mb-2 text-quicksand-medium">Resources</h5>

      <div className="px-2">
        {/* Youtube References */}
        {resources["YouTube"]?.length !== 0 && (
          <div className="my-2">
            <h6 className="text-nunito-regular">YouTube</h6>
            <div className="row">
              {resources["YouTube"]?.map((item) => (
                <div className="col-md-5 m-2" key={item.link}>
                  <iframe
                    width="100%"
                    height="150"
                    title={item.name || item.link}
                    src={item.link}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blogs References */}
        {resources["Blogs"]?.length !== 0 && (
          <div className="my-2">
            <h6 className="text-nunito-regular">Blogs</h6>
            <ul>
              {resources["Blogs"]?.map((item) => (
                <li key={item.link}>
                  <a href={item.link} target="_blank" rel="noreferrer noopener">
                    {item.name || item.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;
