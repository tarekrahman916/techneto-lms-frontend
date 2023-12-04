import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { SearchProps } from "antd/es/input";

const { Search } = Input;

const SearchForm = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <form className="lg:w-[440px] relative mb-6 mt-3">
      <div className="relative">
        <input
          type="search"
          placeholder="Type here"
          className="w-full rounded-full p-4 bg-slate-800 border-none text-white"
        />

        <button
          type="submit"
          className="absolute right-0 top-0  p-4 bg-slate-900 rounded-full border-none cursor-pointer"
        >
          <SearchOutlined className="text-white" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
