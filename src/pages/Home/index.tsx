import React, { useContext } from 'react';
import SocketContext from '../../contexts/socket.context';

const Application: React.FunctionComponent = () => {
  const { socket, users } = useContext(SocketContext).SocketState;
  return (
    <div>
        <h2>Socket IO Information:</h2>
        <p>
            Users online: <strong>{users.length}</strong>
            <br />
            Socket ID: <strong>{socket?.id}</strong>
        </p>
    </div>
  );
};

export default Application;