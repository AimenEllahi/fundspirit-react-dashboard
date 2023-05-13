import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import TopCards from "../components/dashboard/TopCards";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCampaigns } from "../Actions/Campaigns";
import { getNPOs, getNPORequets } from "../Actions/NPOs";
import { fetchCampaigns, fetchNPOs, fetchUsers } from "../api";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiDonateHeart, BiUser } from "react-icons/bi";
import { MdOutlineCampaign } from "react-icons/md";
const Starter = () => {
  const dispatch = useDispatch();
  const [campaigns, setCampaigns] = useState([]);
  const [npos, setNPOs] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    dispatch(getCampaigns());
    dispatch(getNPOs());
    dispatch(getNPORequets());
  }, []);

  useEffect(() => {
    fetchCampaigns()
      .then((res) => {
        setCampaigns(res.data);
      })
      .catch((err) => console.log(err));

    fetchNPOs()
      .then((res) => {
        setNPOs(res.data);
      })
      .catch((err) => console.log(err));

    fetchUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm='6' lg='3'>
          <TopCards
            bg='bg-light-success text-success'
            title='Profit'
            subtitle='Total Funding'
            earning='$21k'
            icon={<AiOutlineDollarCircle />}
          />
        </Col>
        <Col sm='6' lg='3'>
          <TopCards
            bg='bg-light-danger text-danger'
            title='Refunds'
            subtitle='Total Users'
            earning={users.length}
            icon={<BiUser />}
          />
        </Col>
        <Col sm='6' lg='3'>
          <TopCards
            bg='bg-light-warning text-warning'
            title='New Project'
            subtitle='Total Campaigns'
            earning={campaigns.length}
            icon={<MdOutlineCampaign />}
          />
        </Col>
        <Col sm='6' lg='3'>
          <TopCards
            bg='bg-light-info text-into'
            title='Campaigns'
            subtitle="Total NPO's"
            earning={npos.length}
            icon={<BiDonateHeart />}
          />
        </Col>
      </Row>
      {/***Sales & Feed***/}
      <Row>
        <Col xxl='12'>
          <SalesChart />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
