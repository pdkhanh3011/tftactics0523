import styled from "styled-components";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, Typography, Select } from "antd";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { useSelector } from "react-redux";

const { TextArea } = Input;
const { Title } = Typography;

function AddSynergys() {
  const selectedVersion = useSelector((state) => state.version.versionName);
  const allFirebaseApps = useSelector((state) => state.firebase.allFirebaseApps);

  const db = allFirebaseApps[selectedVersion]?.db;
  const storage = allFirebaseApps[selectedVersion]?.storage;
  const [form] = Form.useForm();
  const [img, setImg] = useState("");
  const onFinish = async (values) => {
    const metadata = {
      contentType: img.type,
    };
    const imgRef = ref(storage, `synergys/${img.name}`);
    uploadBytes(imgRef, img, metadata).then(async (snapshot) => {
      let synergy_image = await getDownloadURL(
        ref(storage, snapshot.metadata.fullPath)
      );
      try {
        const docRef = await addDoc(collection(db, "synergys"), {
          ...values,
          synergy_image,
        });
        console.log("Document written with ID: ", docRef.id);
        form.resetFields();
      } catch (error) {
        throw new Error(error);
      }
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  function hanleImg(file) {
    setImg(file);
  }
  return (
    <AddOrigins>
      <Wrapper className="wrapper">
        <Title align="center">Create Synergy</Title>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Synergy Name"
            name="synergy_name"
            rules={[
              {
                required: true,
                message: "Please input synergy Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input synergy Name!",
              },
            ]}
            name="type"
            label="Type"
          >
            <Select>
              <Select.Option value="origin">Origin</Select.Option>
              <Select.Option value="class">Class</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Upload" valuePropName="fileList">
            <Upload
              beforeUpload={(e) => hanleImg(e)}
              maxCount="1"
              action="/upload.do"
              listType="picture-card"
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item
            name="synergy_description"
            label="Synergy Description"
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input Synergy Level Description!",
              },
            ]}
            name="synergy_description_level"
            label="Synergy Description Level"
          >
            <TextArea rows={10} />
          </Form.Item>
          <Form.Item
            label="Create Synergy"
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
    </AddOrigins>
  );
}

export default AddSynergys;

const AddOrigins = styled.div``;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
