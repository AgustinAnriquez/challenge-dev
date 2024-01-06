import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { LuRefreshCcwDot } from "react-icons/lu";
function RefreshButton({onRefreshClick}) {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Refresh
        </Tooltip>
      );
      const handleRefreshClick = () => {
        onRefreshClick();
      };

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <button onClick={handleRefreshClick}> <LuRefreshCcwDot /> </button>
    </OverlayTrigger>
  )

}
export default RefreshButton