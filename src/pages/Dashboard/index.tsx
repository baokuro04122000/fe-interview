import { useContext, useMemo } from "react";

import Chart from "../../components/Chart/Chart";
import SocketContext from "../../contexts/socket.context";

const Dashboard = () => {
  const { blue, orange } = useContext(SocketContext).SocketState;
  console.log('blue::', blue)
  const chartResult = useMemo(() => {
    return <Chart orangeClick={orange} blueClick={blue}/>
  }, [blue, orange])
  return (
    <>
      {chartResult}
    </>
  );
};

export default Dashboard;
