import React from 'react';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div>
    {
      users
        ? (
          <div>
            <div className="textContainerOuter">
              <h2>LOBBY</h2>
              <div className="textContainer">
                {users.map(({ name }) => (
                  <div key={name}>
                    <h2>
                      {name}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;