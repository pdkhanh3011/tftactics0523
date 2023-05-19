import styled from "styled-components";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Upload,
  Typography,
  Select,
  Row,
  Col,
} from "antd";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { useSelector } from "react-redux";

const { TextArea } = Input;
const { Title } = Typography;

const OPTIONS = [
  "Tear of the Goddess",
  "A.D.M.I.N. Emblem",
  "Hand of Justice",
  "Gargoyle Stoneplate",
  "Morellonomicon",
  "Redemption",
  "Hextech Gunblade",
  "Zz'Rot Portal",
  "Edge of Night",
  "Renegade Emblem",
  "Chalice of Power",
  "Bloodthirster",
  "Last Whisper",
  "Negatron Cloak",
  "Dragon's Claw",
  "Titan's Resolve",
  "Runaan's Hurricane",
  "Spatula",
  "Quicksilver",
  "Protector's Vow",
  "Ionic Spark",
  "Jeweled Gauntlet",
  "Duelist Emblem",
  "Blue Buff",
  "Giant's Belt",
  "Bramble Vest",
  "Rabadon's Deathcap",
  "Sparring Gloves",
  "Heart Emblem",
  "Guinsoo's Rageblade",
  "Needlessly Large Rod",
  "Thief's Gloves",
  "Spear of Shojin",
  "Deathblade",
  "Anima Squad Emblem",
  "Mascot Emblem",
  "Zephyr",
  "Archangel's Staff",
  "B.F. Sword",
  "Chain Vest",
  "Statikk Shiv",
  "Locket of the Iron Solari",
  "Zeke's Herald",
  "Ox Force Emblem",
  "Rapid Firecannon",
  "Sunfire Cape",
  "Giant Slayer",
  "Tactician's Crown",
  "Shroud of Stillness",
  "Infinity Edge",
  "Warmog's Armor",
  "InfiniTeam Emblem",
  "Banshee's Claw",
  "Recurve Bow",
];

function AddChampions() {
  const selectedVersion = useSelector((state) => state.version.versionName);
  const allFirebaseApps = useSelector((state) => state.firebase.allFirebaseApps);
  const db = allFirebaseApps[selectedVersion]?.db;
  const storage = allFirebaseApps[selectedVersion]?.storage;
  
  const { synergysData } = useSelector((state) => state.api);
  const [champion_class, setChampion_class] = useState([]);
  const [champion_origin, setChampion_origin] = useState([]);
  const [champion_items, setChampion_items] = useState([]);
  const [form] = Form.useForm();
  const [skill_img, setSkillImg] = useState("");
  const [champion_img, setChampionImg] = useState("");
  const onFinish = async (values) => {
    const metadata = {
      contentType: skill_img.type,
    };
    const skillImgRef = ref(storage, `champions/skills/${skill_img.name}`);
    const snapshot = await uploadBytes(skillImgRef, skill_img, metadata);
    const skill_img_link = await getDownloadURL(
      ref(storage, snapshot.metadata.fullPath)
    );
    const championImgRef = ref(
      storage,
      `champions/avatar/${champion_img.name}`
    );
    const snapshot2 = await uploadBytes(championImgRef, champion_img, metadata);
    const champion_img_link = await getDownloadURL(
      ref(storage, snapshot2.metadata.fullPath)
    );

    const data = {
      ...values,
      skill_img_link,
      champion_img_link,
      champion_items,
      champion_class,
      champion_origin,
    };
    try {
      const docRef = await addDoc(collection(db, "champions"), data);
      console.log("Document written with ID: ", docRef.id);
      form.resetFields();
    } catch (error) {
      throw new Error(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  function getSkillImg(file) {
    setSkillImg(file);
  }
  function getChampionImg(file) {
    setChampionImg(file);
  }
  return (
    <AddOrigins>
      <Wrapper className="wrapper">
        <Title align="center">Create Champions</Title>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 0,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row>
            <Col span={8}>
              <Title align="center">Skill</Title>
              <Form.Item
                label="Skill Name"
                name="skill_name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="skill_img" valuePropName="fileList">
                <Upload
                  beforeUpload={(e) => getSkillImg(e)}
                  maxCount="1"
                  action="/upload.do"
                  listType="picture-card"
                >
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Skill Image</div>
                  </div>
                </Upload>
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                  },
                ]}
                name="skill_description"
                label="Skill Description"
              >
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                  },
                ]}
                name="skill_description_level"
                label="Skill Description level"
              >
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                  },
                ]}
                name="skill_type"
                label="skill type"
              >
                <Select>
                  <Select.Option value="active">active</Select.Option>
                  <Select.Option value="passive">passive</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Title align="center">Info</Title>
              <Form.Item
                label="Champion Name"
                name="champion_name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Avatar" valuePropName="fileList">
                <Upload
                  beforeUpload={(e) => getChampionImg(e)}
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
                rules={[
                  {
                    required: true,
                  },
                ]}
                name="is_dragon"
                label="is dragon"
              >
                <Select>
                  <Select.Option value="true">true</Select.Option>
                  <Select.Option value="false">false</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Items recommend" name="champion_items">
                <Select
                  mode="multiple"
                  placeholder="select multi item"
                  value={champion_items}
                  onChange={setChampion_items}
                  style={{ width: "100%" }}
                >
                  {OPTIONS.map((item) => (
                    <Select.Option key={item} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="class" name="champion_class">
                <Select
                  mode="multiple"
                  placeholder="select class"
                  value={champion_class}
                  onChange={setChampion_class}
                  style={{ width: "100%" }}
                >
                  {synergysData
                    .filter((item) => item.type === "class")
                    .map((item) => (
                      <Select.Option
                        key={item.synergy_name}
                        value={item.synergy_name}
                      >
                        {item.synergy_name}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
              <Form.Item label="origin" name="champion_origin">
                <Select
                  mode="multiple"
                  placeholder="select origin"
                  value={champion_origin}
                  onChange={setChampion_origin}
                  style={{ width: "100%" }}
                >
                  {synergysData
                    .filter((item) => item.type === "origin")
                    .map((item) => (
                      <Select.Option
                        key={item.synergy_name}
                        value={item.synergy_name}
                      >
                        {item.synergy_name}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Title align="center">Stats</Title>
              <Form.Item
                label="Cost"
                name="champion_cost"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Health"
                name="champion_health"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mana"
                name="champion_mana"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Staring Mana"
                name="champion_starting_mana"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Armor"
                name="champion_armor"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mr"
                name="champion_mr"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Dps"
                name="champion_dps"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Damage"
                name="champion_damage"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Atk speed"
                name="champion_akt_spd"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Crit rate"
                name="champion_crit_rate"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Range"
                name="champion_range"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Create Champions">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
    </AddOrigins>
  );
}

export default AddChampions;

const AddOrigins = styled.div``;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
