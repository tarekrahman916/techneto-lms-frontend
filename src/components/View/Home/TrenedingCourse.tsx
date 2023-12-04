import CardTwo from "@/components/ui/Card/CardTwo";

const TrendingCourse = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-3 px-4">
        {new Array(3).fill(null).map((item) => (
          <CardTwo key={item} />
        ))}
      </div>
    </div>
  );
};

export default TrendingCourse;
