import { Popconfirm, Button } from "antd";
import { deleteTopic } from "../../actions/topic";
import { useDispatch } from "react-redux";
import { deleteTopicService } from "../../services/topicService";

function DeleteTopic(props) {
  const { record } = props;
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    await deleteTopicService(id);
    dispatch(deleteTopic(id));
  }

  return (
    <>
      <Popconfirm
        title="Bạn có chắc chắn muốn xóa không?"
        onConfirm={() => handleDelete(record.id)}>
        <Button danger type="primary">
          Delete
        </Button>
      </Popconfirm>
    </>
  );
}

export default DeleteTopic;