import { Button, Form, Modal, Input } from "antd";
import { useState } from "react";
import { editTopicService } from "../../services/topicService";
import { useDispatch } from "react-redux";
import { editTopic } from "../../actions/topic";

function EditTopic(props) {
  const { record } = props;
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const rules = [
    {
      required: true,
      message: 'Bắt buộc nhập!',
    },
  ];

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  }

  const handleEdit = async (value) => {
    const response = await editTopicService(record.id, value);
    if (response) {
      form.resetFields();
      dispatch(editTopic(record.id, value));
      setShowModal(false);
    }
  }

  return (
    <>
      <Button
        type="primary"
        onClick={handleShowModal}>
        Edit
      </Button>
      <Modal
        title="Basic Modal"
        open={showModal}
        onCancel={handleCancel}
        onOk={handleCancel}
      >
        <Form
          name="edit-topic"
          form={form}
          onFinish={handleEdit}
        >
          <Form.Item
            label="Tên topic"
            name="name"
            rules={rules}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default EditTopic;