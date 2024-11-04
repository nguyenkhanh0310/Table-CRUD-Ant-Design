import { Table } from "antd";
import { useEffect, useState } from "react";
import { getListTopicService } from "../../services/topicService";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopicSuccess } from "../../actions/topic";
import DeleteTopic from "./DeleteTopic";
import EditTopic from "./EditTopic";
import CreateTopic from "./CreateTopic";

function Topic() {
  const [topics, setTopics] = useState([]);
  const topicStore = useSelector(state => state.topicReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await getListTopicService();
    setTopics(response);
    dispatch(fetchTopicSuccess(response));
  };

  const handleReload = () => {
    loadData();
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: 'id'
    },
    {
      title: "Topic Name",
      dataIndex: "name",
      key: 'name',
      align: "center",
      editTable: true
    },
    {
      title: "Action",
      dataIndex: "action",
      key: 'action',
      align: "center",
      render: (_, record) =>
        topics.length >= 1 && (
          <>
            <DeleteTopic record={record} />
            <EditTopic record={record}/>
          </>
        )
    },
  ]

  return (
    <>
      <CreateTopic onReload={handleReload}/>
      <Table
        columns={columns}
        dataSource={topicStore.data}
        scroll={{ y: 500 }}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        size="middle"
      >

      </Table>
    </>
  );
}

export default Topic;