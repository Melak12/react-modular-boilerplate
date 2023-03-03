import styled from "@emotion/styled";
import { Box } from "@mui/material";

const OverviewWrapper = styled(Box)(
    () => `
      overflow: auto;
      flex: 1;
      overflow-x: hidden;
      align-items: center;
  `
);

export default OverviewWrapper