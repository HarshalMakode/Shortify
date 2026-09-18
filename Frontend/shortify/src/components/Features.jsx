import features from "../constants/features";

function Features() {
  return (
    <div className="max-w-4xl grid grid-cols-3 gap-5 mt-5">

      {features.map((feature) => (
        <div
          key={feature.title}
          className="flex flex-col items-center text-center"
        >
          <img
            src={feature.image}
            className="w-20 h-20"
          />

          <span className="text-xl font-bold text-gray-600">
            {feature.title}
          </span>

          <span>
            {feature.description}
          </span>
        </div>
      ))}

    </div>
  );
}

export default Features;