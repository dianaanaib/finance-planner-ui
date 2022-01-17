import List from './components/List'
import LineChart from './components/LineChart'
// import UploadButton from './components/UploadButton'
import { Row, Col } from 'antd'
import PieChart from './components/PieChart'
import { Card } from 'antd'
import './App.css'
import "antd/dist/antd.css";

function App() {
  return (
    <div className='chartContainer'>
      <Row gutter={[25, 25]}>
        <Col span={12}>
          <Card bordered={false}>
            <PieChart />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <LineChart />
          </Card>
        </Col>
        <Col span={24}>
          <Card className='transactionsList' bordered={false}>
            <List />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
