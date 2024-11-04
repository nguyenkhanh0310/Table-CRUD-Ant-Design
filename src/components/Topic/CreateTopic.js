import { Button, Form, Input, message, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { createTopicService } from "../../services/topicService";
import { useDispatch } from "react-redux";
import { createTopic } from "../../actions/topic";

function CreateTopic(props) {
  const [showModal, setShowModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = useForm();
  const dispatch = useDispatch();

  const rules = [
    {
      require: true,
      message: "Bắt buộc nhập!",
    }
  ]

  const successMessage = () => {
    messageApi.open({
      type: 'success',
      content: 'Thêm topic thành công!',
    })
  }

  const errorMessage = () => {
    messageApi.open({
      type: 'error',
      content: 'Thêm topic thất bại',
    })
  }

  const handleShowModal = () => {
    setShowModal(true);
  }

  const handleCancel = () => {
    setShowModal(false);
  }

  const handleAddTopic = async (val) => {
    const result = await createTopicService(val);
    if (result) {
      form.resetFields();
      dispatch(createTopic(result));
      successMessage();
    } else {
      errorMessage();
    }
  }

  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        onClick={handleShowModal}>
        Thêm topic
      </Button>

      <Modal
        title="Thêm topic"
        open={showModal}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        <Form
          name="add-topic"
          onFinish={handleAddTopic}
          form={form}
          layout="vertical"
        >
          <Form.Item
            label="Topic ID"
            name="id"
            rules={rules}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Topic name"
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

export default CreateTopic;