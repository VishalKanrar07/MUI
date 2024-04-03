import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>

        {/* eg: login, signup,submit buttons */}
        <Button variant="contained">Contained</Button>

        {/* eg: goback button */}
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("send is clicked")}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          End
        </Button>
        <IconButton aria-label="send" color="primary" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      {/* Button Group */}

      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="large"
          color="error"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="text" orientation="vertical">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
