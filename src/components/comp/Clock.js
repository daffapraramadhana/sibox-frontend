import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaCalendar, FaClock } from "react-icons/fa";

function Clock() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        alignItems: "center",
        // marginTop: "10px",
      }}
    >
      <Row>
        <Col sm={2}>
          <FaCalendar style={{ marginBottom: "5px" }} />
        </Col>
        <Col sm={10}>
          <p>
            {dateState.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <FaClock style={{ marginBottom: "5px", marginRight: "20px" }} />
        </Col>
        <Col sm={10}>
          <p>
            {dateState.toLocaleString("en-US", {
              hour: "numeric",
              hourCycle: "h24",
              minute: "numeric",
              second: "numeric",
            })}
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Clock;
