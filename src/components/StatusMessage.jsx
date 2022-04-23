import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && !noMovesLeft && ` Player ${current.isXNext ? 'X' : 'O'} turn`}
      {!winner && noMovesLeft && 'X and O tied'}
    </h2>
  );
};

export default StatusMessage;
