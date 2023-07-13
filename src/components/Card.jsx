import PropTypes from "prop-types";

export function Card({ data }) {
  console.log(data);
  return (
    <div className="w-full text-gray-900 dark:text-stone-100">
      <div className="w-full  m-auto">
        <a href="#">
          <img
            className="rounded-3xl mb-4 aspect-video h-72 object-cover bg-stone-200 transition-all ease-in"
            src={data.pictures[0].picture}
            alt="product image"
          />
        </a>
        <div className="pb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 h-8">
              {data.super && (
                <div className="text-sm border-2 font-bold border-stone-100 p-2 rounded-full">
                  <p>SUPER HOST</p>
                </div>
              )}
              <a href="#">
                <h5 className="text-sm racking-tight text-gray-700 dark:text-stone-300">
                  {data.type.charAt(0).toUpperCase() + data.type.slice(1)}
                </h5>
              </a>
            </div>
            {/* Stars */}
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-red-500 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <span className="font-semibold rounded text-sm">{data.rate}</span>
            </div>
          </div>

          <p className="font-semibold">{data.description}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    super: PropTypes.bool.isRequired,
    rate: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["apartment", "private room", "entire house"])
      .isRequired,
    description: PropTypes.string.isRequired,
    info: PropTypes.shape({
      beds: PropTypes.number.isRequired,
      rooms: PropTypes.number.isRequired,
      clean: PropTypes.string.isRequired,
    }).isRequired,
    pictures: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        picture: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
