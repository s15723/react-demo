import style from './index.module.less';
import { Select, Button } from 'antd';
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const About = () => (
  <div className={style.about}>
    <Select
      // getPopupContainer={triggerNode => triggerNode.parentNode}
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      onChange={handleChange}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Button type='primary'>按钮</Button>
  </div>
);

export default About;