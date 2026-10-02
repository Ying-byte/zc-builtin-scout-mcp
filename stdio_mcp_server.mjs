#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "builtin",
  boardId: "builtin-official",
  domain: "builtin.com",
  npmName: "zc-builtin-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
