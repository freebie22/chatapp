import React from "react";

function MessageContainer({ messages }) {
  return (
    <div>
      {messages.map((message, index) => (
        <table className="table table-striped">
          <tbody>
            <tr key={index}>
              <td>
                {message.msg} - {message.username}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default MessageContainer;
