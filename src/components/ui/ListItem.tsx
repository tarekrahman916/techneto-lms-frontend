import { List } from "antd";
import { PlusOutlined } from "@ant-design/icons";

type ListItem = {
  title: string;
};

const ListItem = ({ items }: { items: ListItem[] }) => {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={items}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              className="text-lg text-gray-700 tracking-wide"
              avatar={<PlusOutlined />}
              title={item.title}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListItem;
