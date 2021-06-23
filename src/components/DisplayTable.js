import React from "react";

const DisplayTable = ({ data, repositories }) => {
   return (
    <table className="ui celled table">
      <thead>
        <tr>
        <th>Repositories</th>
          <th>Branches</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>
            {repositories.map(repo => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a href={repo.html_url} className="header">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </td>
          <td>
          </td>  
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;
